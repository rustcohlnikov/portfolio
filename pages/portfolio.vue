<template>
  <div class="grid">
    <header/>
    <section class="portfolio">
      <Tabs
        :initial="'ozon'"
        :tabs="tabs"
      >
        <template slot="tab-switcher-ozon">
          <p class="switcher-item">ozon</p>
        </template>
        <template slot="tab-details-ozon">
          <h2>Ozon</h2>
          <p>Text about my projects and technologies I'm using here.
          Here is a <a href="#">link</a> to the project I am working on.
          </p>
          <!--<img src="~/assets/img/ozon.jpg" alt="ozon">-->
        </template>

        <template slot="tab-switcher-aviata">
          <p class="switcher-item">aviata</p>
        </template>
        <template slot="tab-details-aviata">
          <h2>Aviata</h2>
          <p>Text about my projects and technologies I'm using here.
          Here is a <a href="#">link</a> to the project I am working on.
          </p>
          <!--<img src="~/assets/img/aviata.jpg" alt="aviata">-->
        </template>

        <template slot="tab-switcher-efly">
          <p class="switcher-item">efly</p>
        </template>
        <template slot="tab-details-efly">
          <h2>eFly</h2>
          <p>Text about my projects and technologies I'm using here.
          Here is a <a href="#">link</a> to the project I am working on.
          </p>
          <!--<img src="~/assets/img/efly.jpg" alt="efly">-->
        </template>
      </Tabs>
    </section>
    <section class="column"/>
  </div>
</template>

<script>
import Tabs from '~/components/Tabs.vue'

export default {
  components: {
    Tabs
  },
  data() {
    return {
      	tabs: [
          'ozon',
          'aviata',
          'efly',
        ],
    };
  },
}
</script>

<style lang="scss" scoped>

header {
  grid-area: header;
  border-bottom: 3px solid $c-dark;
  position: relative;
  padding: 4rem 0;
  background-color: $c-accent;
}

.portfolio {
  border-right: 3px solid $c-dark;
  grid-area: content;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.column {
  grid-area: column;
  background-color: $c-yellow;
}
</style>

