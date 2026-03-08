<script lang="ts">
	import Grain from '$lib/components/lis/Grain.svelte';
	import Main from '$lib/components/lis/Main.svelte';
	import Polaroid from '$lib/components/lis/Polaroid.svelte';
</script>

<Grain />

<div class="page">
	<div class="content">
		<section class="main">
			<Main />
		</section>
		<aside>
			<div class="photo one">
				<Polaroid src="/img/celine.webp" caption="Celine, 2023" rotate={-3} textAlign="center" />
			</div>
			<div class="photo two">
				<Polaroid
					src="/img/bike.webp"
					caption="Trip to Bad Saarow, 2025"
					rotate={10}
					textAlign="center"
				/>
			</div>
			<div class="photo three">
				<Polaroid
					src="/img/hand.webp"
					caption="Summer with Janelle, 2014"
					rotate={-10}
					textAlign="center"
				/>
			</div>
		</aside>
	</div>
</div>

<style>
	.page {
		min-height: 100svh;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		align-items: center;
	}

	.main {
		width: 30vw;
	}

	aside {
		position: relative;
		width: 30vw;
		height: 50vh;
	}

	.photo {
		position: absolute;
	}

	.one {
		z-index: 3;
		left: 0;
		top: -15%;
	}

	.two {
		z-index: 1;
		left: 0;
		bottom: -20%;
	}

	.three {
		z-index: 2;
		left: 50%;
		top: calc(50% - 100px);
	}

	@media (max-width: 900px) {
		.main,
		aside {
			width: 50vw;
		}
	}

	@media (max-width: 500px) {
		.page {
			padding: 4rem 2rem;
		}

		.content {
			grid-template-columns: 1fr;
		}

		.main,
		aside {
			width: initial;
		}

		.photo {
			position: relative;
			top: initial;
			right: initial;
			left: initial;
			bottom: initial;
		}
	}
</style>
