<script>
	let dark = true;

	function toggle() {
		dark = !dark;
		document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
	}
</script>

<button onclick={toggle}>
	{dark ? '◐' : '◑'}
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
	}

	button:hover {
		color: var(--accent);
	}
</style>
