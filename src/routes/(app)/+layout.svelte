<script lang="ts">
  import favicon from '$lib/assets/lis-favicon.ico';
	import ThemeSwitcher from '$lib/components/shared/ThemeSwitcher.svelte';

  let { children } = $props();

</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/lis.css" />
</svelte:head>

<div data-theme="life-is-strange">
  {@render children()}

	<ThemeSwitcher />
</div>