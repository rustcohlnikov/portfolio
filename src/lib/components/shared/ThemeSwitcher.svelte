<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	let isWork = $derived(page.url.pathname.startsWith('/work'));
	function toggle() {
		const path = isWork ? '/' : '/work';
		goto(resolve(path));
	}
</script>

<button onclick={toggle}>
	{isWork ? '→ life' : '→ work'}
</button>

<style>
	button {
		background: none;
		border: none;
		color: var(--text-secondary);
		font-family: inherit;
		font-size: 1rem;
		cursor: pointer;
		padding: 0;
		transition: color 0.15s;

		position: fixed;
		top: 1rem;
		right: 1.5rem;
		z-index: 1000;
	}

	button:hover {
		color: var(--accent);
	}
</style>
