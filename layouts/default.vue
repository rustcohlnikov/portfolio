<template>
  <div class="app">
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
    font-family: "RN", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    background-color: $c-bg;
    color: $c-dark;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;

    @include md {
        font-size: 18px;
    }
}

#__layout,
#__nuxt,
.app {
    height: 100vh;
    width: 100vw;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>

