<span class="cursor">_</span>

<style>
	.cursor {
		font-family: "Press Start 2P", monospace;
		font-size: 3rem;
		display: inline-block;
		animation: colorshift 1s steps(1) infinite;
	}

	@keyframes colorshift {
		0% {
			color: transparent;
		}
		50% {
			color: var(--text);
		}
	}
</style>
