<script lang="ts">
  export let src = '';
  export let caption = '';
  export let rotate = -2;
  export let textAlign = 'left';
</script>

<figure class="polaroid {$$restProps.class || ''}" style="--rotate: {rotate}deg">
  <div class="frame">
    <img {src} alt={caption} />
    {#if caption}
      <figcaption style="text-align: {textAlign};">{caption}</figcaption>
    {/if}
  </div>
</figure>

<style>
  .polaroid {
    display: inline-block;
    transform: rotate(var(--rotate));
    margin: 0;
  }

  .frame {
    background: #f0e8d8;
    padding: 0.7rem 0.7rem 1.2rem 0.7rem;
    box-shadow:
      2px 2px 4px rgba(0,0,0,0.12),
      4px 4px 16px rgba(0,0,0,0.08);
  }

  img {
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }

  figcaption {
    margin-top: 1rem;
    font-family: 'Reenie Beanie', cursive;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--text-secondary);
    line-height: 1;
  }

  @media (max-width: 500px) {
		img {
			width: 100%;
		}
	}
</style>