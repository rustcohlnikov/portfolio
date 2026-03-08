<script lang="ts">
	import { getLastUpdated } from '$lib/utils/get-last-updated';
	import Stack from '../shared/Stack.svelte';
	import Links from '../shared/Links.svelte';

	let lastUpdatedPromise = getLastUpdated();

	let links = [
		{ label: 'Github', href: 'https://github.com/rustcohlnikov' },
		{ label: 'Linkedin', href: 'https://linkedin.com/in/nazymjumadilova' }
	];
</script>

<footer>
	<Stack justify="space-between" gap="5rem">
		{#await lastUpdatedPromise}
			<span>loading...</span>
		{:then lastUpdated}
			<span>// last updated: {lastUpdated || 'Unknown'}</span>
		{/await}

		<span>did:plc:p3wqx64jwx7es3xhgzdlkha5</span>

		<Links {links} />
	</Stack>
</footer>

<style>
	footer {
		padding-top: 1.5rem;
		border-top: 1px dashed var(--text-secondary);
		color: var(--text-secondary);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
	}

	span {
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
	}
</style>
