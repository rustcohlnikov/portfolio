<script>
	export let direction = 'row';
	export let gap = '0.5rem';
	export let align = 'center';
	export let justify = 'flex-start';
</script>

<div
	class="stack"
	style="--direction:{direction}; --gap:{gap}; --align:{align}; --justify:{justify};"
>
	<slot />
</div>

<style>
	.stack {
		display: flex;
		flex-direction: var(--direction);
		gap: var(--gap);
		align-items: var(--align);
		justify-content: var(--justify);
	}
</style>
