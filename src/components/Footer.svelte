<script>
	import Stack from './Stack.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<footer>
	<Stack justify="space-between">
		<span>// last updated: 08/03/2026</span>
		<ThemeSwitcher />
	</Stack>
</footer>

<style>
	footer {
		padding-top: 2rem;
		border-top: 1px dashed var(--text-secondary);
		color: var(--text-secondary);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
	}
</style>
