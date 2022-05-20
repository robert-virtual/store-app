<script lang="ts">
	import { onMount } from 'svelte';
	export let videoId = 'video';
	let videoRef: HTMLVideoElement;
	let progress = '';
	const { round } = Math;
	onMount(() => {
		videoRef.ontimeupdate = () => {
			progress = `${round((videoRef.currentTime / videoRef.duration) * 100)}%`;
		};
	});
	const toogleVideo = () => {
		if (videoRef.paused) {
			return videoRef.play();
		}
		videoRef.pause();
	};
</script>

<div class="video-wrapper">
	<video
		on:click={toogleVideo}
		bind:this={videoRef}
		src="http://localhost:4000/video/{videoId}"
		controlslist="nodownload"
	/>
	<button on:click={toogleVideo} class="btn-play">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
			/>
			<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
	</button>
	<div class="progress-wapper">
		<div style="width: {progress};" class="progress" />
	</div>
</div>

<style>
	.progress-wapper {
		background-color: #d0d0d0;
		width: 100%;
		height: 5px;
	}
	.progress {
		background-color: red;
		height: 5px;
		width: 0%;
		transform: all 0.5s;
	}
	video {
		width: 100%;
	}
	.video-wrapper {
		position: relative;
		width: 60%;
	}
	.btn-play {
		position: absolute;
		bottom: 0.5rem;
		left: 0.5rem;
	}
</style>
