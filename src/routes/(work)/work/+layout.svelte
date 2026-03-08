<script lang="ts">
	import favicon from '$lib/assets/work-favicon.ico';
	import ModeToggle from '$lib/components/shared/ModeToggle.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/work.css" />

	<title>Work | Relerin</title>
</svelte:head>

<div data-theme="work">
	{@render children()}

	<ModeToggle />
</div>
