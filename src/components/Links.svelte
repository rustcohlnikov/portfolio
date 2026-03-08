<script>
	export let links = [
		{ label: 'Github', href: 'https://github.com/rustcohlnikov' },
		{ label: 'Linkedin', href: 'https://linkedin.com/in/nazymjumadilova' },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/reler.in' }
	];
</script>

<nav class="links">
	{#each links as link (link.label)}
		<a href={link.href} target="_blank" rel="noopener noreferrer external">{link.label}</a>
	{/each}
</nav>

<style>
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
</style>
