<script lang="ts">
  import favicon from '$lib/assets/work-favicon.ico';
	import ThemeSwitcher from '$lib/components/shared/ThemeSwitcher.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/work.css" />

  <title>Work | Relerin</title>
</svelte:head>

<div data-theme="work">
  {@render children()}

	<ThemeSwitcher />
</div>