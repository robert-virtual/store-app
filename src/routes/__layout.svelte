<script>
	import { page } from '$app/stores';

	import '../app.css';
</script>

<nav class="dark:bg-[#222] p-4 text-md flex gap-x-4">
	<a class:text-blue-500={$page.url.pathname == '/'} href="/">Inicio</a>
	<a class:text-blue-500={$page.url.pathname == '/productos'} href="/productos">Productos</a>
</nav>
<main class="p-4">
	<slot />
</main>
