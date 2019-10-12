<template>
  <div class="app">
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: "PT Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  letter-spacing: 0.03ex;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#__layout,
#__nuxt,
.app {
  height: 100vh;
  width: 100vw;
}

body {
  background-color: $c-bg;
  color: $c-dark;
  font-size: 16px;
	font-weight: 400;
	line-height: 1.2;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

