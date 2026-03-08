<div class="scanlines" aria-hidden="true"></div>

<style>
  .scanlines {
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 3px,
      rgba(255, 255, 255, 0.05) 3px,
      rgba(255, 255, 255, 0.05) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  :global([data-theme="light"]) .scanlines {
    background: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.05) 3px,
      rgba(0, 0, 0, 0.05) 4px
    );
  }
</style>