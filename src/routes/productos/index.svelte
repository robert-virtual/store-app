<script>
	import { goto } from '$app/navigation';
</script>

<h1>Productos</h1>
<button on:click={() => goto('/productos/crear')} class="btn-primary">Crear</button>
