<script>
	import Scanlines from '$lib/components/work/Scanlines.svelte';
	import Footer from '$lib/components/work/Footer.svelte';
	import Main from '$lib/components/work/Main.svelte';
</script>

<div class="page">
	<div class="content">
		<Scanlines />
		<Main />
	</div>
	<Footer />
</div>

<style>
	.page {
		min-height: 100svh;
		margin: 0 auto;
		padding: 4rem 2rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.content {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: flex-end;

		max-width: 50vw;
	}

	@media (max-width: 500px) {
		.content {
			grid-template-columns: 1fr;
			max-width: initial;
		}
	}
</style>
