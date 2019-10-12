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
        <h3 class="title">
          Hi, I'm Nazym —
        </h3>
        <div class="description">
          <p>
            Frontend engineer from Almaty, Kazakhstan. <br />
            Currently based in Moscow, Russia.
            Throw some words about my work, professional interests and hobbies.
          </p>
          <p>
            Also an occasional photographer, feminist and book lover.
          </p>
        </div>
      </div>
      <div class="about-social">
        <ul class="list">
          <li><a href="#"><img src="~/assets/img/github.svg" alt="github"></a></li>
          <li><a href="#"><img src="~/assets/img/instagram.svg" alt="instagram"></a></li>
          <li><a href="#"><img src="~/assets/img/linkedin.svg" alt="linkedin"></a></li>
          <li><a href="#"><img src="~/assets/img/unsplash.svg" alt="unsplash"></a></li>
        </ul>
      </div>
    </section>
    <section class="portfolio">
      		<Tabs
						:initial="'ozon'"
						:tabs="tabs"
					>
						<!-- Ozon -->
						<template slot="tab-switcher-ozon">
							<p class="switcher-item">ozon</p>
						</template>
						<template slot="tab-details-ozon">
              <h2>Ozon.Invest</h2>
              <p>Text about my projects and technologies I'm using here.</p>
              <p>Here is a <a href="#">link</a> to the project I am working on.</p>
              <img src="~/assets/img/ozon.jpg" alt="ozon">
						</template>

						<!-- Aviata -->
						<template slot="tab-switcher-aviata">
							<p class="switcher-item">aviata</p>
						</template>
						<template slot="tab-details-aviata">
              <h2>Aviata.kz</h2>
              <p>Text about my projects and technologies I'm using here.</p>
              <img src="~/assets/img/aviata.jpg" alt="aviata">
						</template>

						<!-- efly -->
						<template slot="tab-switcher-efly">
						  <p class="switcher-item">efly</p>
						</template>
						<template slot="tab-details-efly">
              <h2>eFly.kz</h2>
              <p>Text about my projects and technologies I'm using here.</p>
              <img src="~/assets/img/efly.jpg" alt="efly">
						</template>
					</Tabs>
    </section>
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
.grid {
  height: 100%;
  display: grid;
  grid-template-areas: "header header"
                       "about portfolio";
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 1fr 4fr;
}

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
  grid-area: about;
  border-right: 3px solid $c-dark;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 20vh;

  &-text,
  &-social {
    width: 360px;
    height: 300px;
  }

  &-social {
    width: 360px;
    height: auto;
    margin-bottom: 3rem;
  }

  .title {
    color: $c-accent;
    font-weight: bold;
    margin-bottom: 2rem;
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

.portfolio {
  grid-area: portfolio;
  height: 100%;
}
</style>

