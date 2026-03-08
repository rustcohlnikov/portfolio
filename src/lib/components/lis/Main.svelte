<script>
	import Links from '$lib/components/shared/Links.svelte';
	let links = [
		{ label: 'Unsplash', href: 'https://unsplash.com/@relerin' },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/reler.in' }
	];
</script>

<main>
	<h1>Hallo!</h1>
	<section>
		<p>
			I'm Nazym and this is my corner of the Internet.
		</p>
    <p>When I'm not at a computer, I photograph my life on film, cycle around Berlin, and
			occasionally bake pretty good scones.</p>
	</section>

	<Links {links} />
</main>

<style>
	section {
		margin-bottom: 1.5rem;
		color: var(--text);
	}

	p {
		margin-bottom: 1rem;
	}

	h1 {
		font-family: 'Reenie Beanie', cursive;
		font-size: 4rem;
		line-height: 1;
		margin-bottom: 1rem;
	}
</style>
