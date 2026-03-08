<script>
	import Links from './Links.svelte';
	import Stack from './Stack.svelte';
	import Cursor from './Cursor.svelte';
	import Scanlines from './Scanlines.svelte';
</script>

<main>
	<Scanlines />
	<Stack align="baseline" gap="0.6rem">
		<h1>Hello</h1>
		<Cursor />
	</Stack>
	<section>
		<p>
			I'm <b>Nazym</b>, a Senior Frontend Engineer at
			<a href="https://kraken.tech/" target="_blank">Kraken</a>.
		</p>
		<p>
			Outside of work, I take too many photos of my cat Celine on film, cycle around Berlin on my
			bike, and bake scones.
		</p>
	</section>

	<Links />
</main>

<style>
	main {
		flex: 1;
	}

	section {
		margin-bottom: 1.5rem;
	}

	p {
		margin-bottom: 1rem;
	}

	h1 {
		font-family: 'Press Start 2P', monospace;
		font-size: 3rem;
		line-height: 1;
		margin-bottom: 3rem;
	}
</style>
