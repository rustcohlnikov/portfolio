<script lang="ts">
	import favicon from '$lib/assets/lis-favicon.ico';
	import ModeToggle from '$lib/components/shared/ModeToggle.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/lis.css" />

	<title>Main | Relerin</title>
</svelte:head>

<div data-theme="life-is-strange">
	{@render children()}

	<ModeToggle />
</div>
