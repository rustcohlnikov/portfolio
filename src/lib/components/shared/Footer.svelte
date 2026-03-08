<script lang="ts">
	import { getLastUpdated } from '$lib/utils/get-last-updated';
	import Stack from '../shared/Stack.svelte';
	import ThemeSwitcher from '../shared/ThemeSwitcher.svelte';

	let lastUpdatedPromise = getLastUpdated();
</script>

<footer>
	<Stack justify="space-between">
		{#await lastUpdatedPromise}
			<p>loading...</p>
		{:then lastUpdated}
			<span>// last updated: {lastUpdated || 'Unknown'}</span>
		{/await}
		<ThemeSwitcher />
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
</style>
