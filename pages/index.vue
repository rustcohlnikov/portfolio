<template>
  <div class="grid">
    <header>
      <div class="logo">
        <!--
          <img class="logo-color" src="~/assets/img/logo.svg" alt="logo">
          <img class="logo-shadow" src="~/assets/img/logo-shadow.svg" alt="logo">
          -->
      </div>
    </header>
    <section class="about">
      <div class="about-text">
        <h2 class="title">
          Hi, I'm Nazym
        </h2>
        <div class="description">
          <p>
            Frontend engineer from Almaty, Kazakhstan. <br >
            Currently based in Moscow, Russia. <br >
            See my <nuxt-link to="portfolio">projects</nuxt-link>.
          </p>
          <p>
            Also an occasional photographer, feminist and book lover.
          </p>
        </div>
      </div>
      <div class="about-social">
        <ul class="list">
          <li><a 
            target="_blank" 
            href="https://github.com/rustcohlnikov"><img 
              src="~/assets/img/github.svg" 
              alt="github"></a></li>
          <li><a 
            target="_blank" 
            href="https://www.instagram.com/relerin"><img 
              src="~/assets/img/instagram.svg" 
              alt="instagram"></a></li>
          <li><a 
            target="_blank" 
            href="https://linkedin.com/in/nazymjumadilova"><img 
              src="~/assets/img/linkedin.svg" 
              alt="linkedin"></a></li>
          <li><a 
            target="_blank" 
            href="https://unsplash.com/@relerin"><img 
              src="~/assets/img/unsplash.svg" 
              alt="unsplash"></a></li>
        </ul>
      </div>
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

.logo {
  position: relative;

  &-color {
    position: relative;
    z-index: 2;
  }

  &-shadow {
    z-index: 1;
    position: absolute;
    left: .25rem;
    top: .5rem;
  }
}

.about {
  grid-area: content;
  border-right: 3px solid $c-dark;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 25vh;

  &-text,
  &-social {
    width: 400px;
    height: 300px;
  }

  &-social {
    height: auto;
    margin-bottom: 3rem;
  }

  .title {
    color: $c-accent;
  }

  .description {
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  .list {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}

.column {
  grid-area: column;
  background-color: $c-yellow;
}
</style>

