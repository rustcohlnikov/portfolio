<script>
	import Stack from '../shared/Stack.svelte';
	import Cursor from './Cursor.svelte';
</script>

<main>
	<Stack align="baseline" gap="0.6rem">
		<h1><span class="symbol">&gt;</span>Hallo</h1>
		<Cursor />
	</Stack>
	<section>
		<p>
			I've been building for the web since 2014: started with jQuery and Angular, and had some great
			time working with Vue.js.
		</p>
		<p>
			Currently at
			<a href="https://kraken.tech/" target="_blank">Kraken</a> with React, TypeScript, Next.js, Jest,
			and Playwright.
		</p>
		<p>Based in Berlin.</p>
	</section>
</main>

<style>
	.symbol {
		color: var(--accent);
		margin-right: 1rem;
	}

	main {
		text-wrap: balance;
	}

	p {
		margin-bottom: 1.5rem;
		color: var(--text);
	}

	h1 {
		font-family: 'Press Start 2P', monospace;
		font-size: 2rem;
		line-height: 1;
		margin-bottom: 3rem;
		color: var(--text);
	}
</style>
