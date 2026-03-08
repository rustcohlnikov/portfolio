<script>
	import Links from '../shared/Links.svelte';
	import Stack from '../shared/Stack.svelte';
	import Cursor from './Cursor.svelte';

	let links = [
		{ label: 'Github', href: 'https://github.com/rustcohlnikov' },
		{ label: 'Linkedin', href: 'https://linkedin.com/in/nazymjumadilova' }
	];
</script>

<main>
	<Stack align="baseline" gap="0.6rem">
		<h1>Hallo</h1>
		<Cursor />
	</Stack>
	<section>
		<p>
			Currently, I'm building interfaces at
			<a href="https://kraken.tech/" target="_blank">Kraken</a>.
		</p>
		<p>I've been writing frontend code since 2014: started with jQuery and Angular 1, and had some great time with Vue.js.</p>
		<p>Today I work with React, TypeScript, Next.js, Jest, and Playwright.</p>
	</section>

	<Links {links} />
</main>

<style>
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
