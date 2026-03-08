<script lang="ts">
	type Link = { label: string; href: string };
	export let links: Link[] = [];
</script>

<section class="links">
	{#each links as link (link.label)}
		<a href={link.href} target="_blank" rel="noopener noreferrer external">{link.label}</a>
	{/each}
</section>

<style>
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
</style>
