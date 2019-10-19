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
            Frontend engineer with over five years experience in web development.
            Currently —
            <a
              class="link"
              target="_blank"
              href="https://invest.ozon.ru/">Ozon.Invest</a> (Moscow, Russia).
          </p>
          <p>
            I focus on responsive web design, frontend security and performance and strive to create
            web applications that are aesthetically beautiful, fast, stable, and secure.
          </p>
          <p>
            Also an occasional photographer, feminist and book lover.
          </p>
        </div>
      </div>
      <div class="about-social">
        <ul class="list">
          <li>
            <a
              target="_blank"
              href="https://github.com/rustcohlnikov">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 0C4.69875 0 0 4.59118 0 10.2539C0 14.7853 3.00825 18.6279 7.17937 19.9823C7.70437 20.0788 7.89687 19.7618 7.89687 19.4892C7.89687 19.2457 7.88813 18.6006 7.88375 17.7461C4.963 18.3647 4.347 16.3703 4.347 16.3703C3.86925 15.1869 3.17887 14.8707 3.17887 14.8707C2.22775 14.235 3.25238 14.2478 3.25238 14.2478C4.30675 14.3196 4.86062 15.3039 4.86062 15.3039C5.79688 16.8719 7.3185 16.4191 7.91875 16.1567C8.01325 15.4936 8.28363 15.0416 8.58375 14.7853C6.25188 14.5289 3.801 13.6471 3.801 9.71813C3.801 8.59875 4.20788 7.68444 4.88163 6.96667C4.7635 6.70776 4.40912 5.66528 4.9735 4.2528C4.9735 4.2528 5.85288 3.97766 7.861 5.30383C8.701 5.07568 9.5935 4.96289 10.486 4.95776C11.3785 4.96289 12.271 5.07568 13.111 5.30383C15.106 3.97766 15.9854 4.2528 15.9854 4.2528C16.5497 5.66528 16.1954 6.70776 16.0904 6.96667C16.7598 7.68444 17.1666 8.59875 17.1666 9.71813C17.1666 13.6573 14.7122 14.5246 12.376 14.7767C12.7435 15.0843 13.0848 15.7132 13.0848 16.6737C13.0848 18.046 13.0716 19.1483 13.0716 19.4816C13.0716 19.7507 13.2554 20.0711 13.7935 19.9686C17.9944 18.6236 21 14.7784 21 10.2539C21 4.59118 16.2986 0 10.5 0Z" />
              </svg>
            </a>
          </li>
          <li>
            <!-- eslint-disable vue/max-attributes-per-line -->
            <a
              target="_blank"
              href="https://www.instagram.com/relerin">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.8775 0.06C6.94417 0.0125 7.28333 0 10 0C12.7167 0 13.0558 0.01 14.1225 0.06C15.1867 0.109167 15.9125 0.2775 16.55 0.525C17.2092 0.779167 17.7658 1.1225 18.3217 1.67833C18.8767 2.23417 19.22 2.7925 19.475 3.45C19.7217 4.08667 19.89 4.81333 19.94 5.8775C19.9875 6.94417 20 7.28333 20 10C20 12.7167 19.99 13.0558 19.94 14.1225C19.8908 15.1867 19.7217 15.9125 19.475 16.55C19.2208 17.2092 18.8767 17.7658 18.3217 18.3217C17.7658 18.8767 17.2067 19.22 16.55 19.475C15.9125 19.7217 15.1867 19.89 14.1225 19.94C13.0558 19.9875 12.7167 20 10 20C7.28333 20 6.94417 19.99 5.8775 19.94C4.81333 19.8908 4.08833 19.7217 3.45 19.475C2.79167 19.2208 2.23417 18.8767 1.67833 18.3217C1.1225 17.7658 0.78 17.2067 0.525 16.55C0.2775 15.9125 0.11 15.1867 0.06 14.1225C0.0125 13.0558 0 12.7167 0 10C0 7.28333 0.01 6.94417 0.06 5.8775C0.109167 4.8125 0.2775 4.0875 0.525 3.45C0.779167 2.79167 1.1225 2.23417 1.67833 1.67833C2.23417 1.1225 2.7925 0.78 3.45 0.525C4.0875 0.2775 4.8125 0.11 5.8775 0.06ZM15.3383 5.8625C16 5.8625 16.5383 5.325 16.5383 4.6625C16.5383 4.00083 15.9992 3.4625 15.3383 3.46333C14.6767 3.46333 14.1383 4.00083 14.1383 4.6625C14.1383 5.32417 14.6758 5.8625 15.3383 5.8625ZM10 4.865C7.1625 4.865 4.865 7.165 4.865 10C4.865 12.8375 7.165 15.135 10 15.135C12.8375 15.135 15.135 12.835 15.135 10C15.135 7.1625 12.835 4.865 10 4.865ZM6.66667 10C6.66667 11.8417 8.15833 13.3333 10 13.3333C11.8417 13.3333 13.3333 11.8417 13.3333 10C13.3333 8.15833 11.8417 6.66667 10 6.66667C8.15833 6.66667 6.66667 8.15833 6.66667 10Z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/nazymjumadilova">
              <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.323C0 1.65.236 1.094.71.657 1.181.219 1.796 0 2.553 0c.743 0 1.345.215 1.804.646.473.445.71 1.024.71 1.738 0 .646-.23 1.185-.69 1.616-.473.444-1.094.667-1.864.667h-.02C1.75 4.667 1.148 4.444.688 4 .23 3.556 0 2.997 0 2.323zM.264 20V6.505h4.5V20h-4.5zm11.493 0h-4.5c.027-4.067.04-7.226.04-9.475 0-2.249-.013-3.589-.04-4.02h4.5v1.92l-.02.04h.02v-.04c.973-1.496 2.33-2.243 4.074-2.243 1.554 0 2.804.515 3.75 1.545C20.527 8.757 21 10.27 21 12.263V20h-4.5v-7.212c0-2.034-.757-3.05-2.27-3.05-.581 0-1.065.158-1.45.474a2.931 2.931 0 00-.861 1.162c-.108.256-.162.62-.162 1.09V20z"/></svg>
          </a></li>
          <li>
            <a
              target="_blank"
              href="https://unsplash.com/@relerin">
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.707 8.856H20V20H0V8.856h6.293v5.56h7.391v-5.56h.023zm0-8.856H6.293v5.584h7.391V0h.023z"/></svg>
            </a>
          </li>
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
  border-bottom: 3px solid $c-accent;
  position: relative;
}

.accent {
  color: $c-accent;
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
  border-right: 3px solid $c-accent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  padding: 0 2rem;
  padding-top: 20vh;

  @include lg {
    border: none;
    padding-top: 20vh;
  }

  @include md {
    padding-top: 2rem;
  }

  &-text,
  &-social {
    width: 420px;
    height: 300px;

    @include md {
      width: 100%;
      height: auto;
    }
  }

  &-social {
    height: auto;
    margin-bottom: 3rem;

    @include md {
      margin-bottom: 1rem;
    }
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

    svg {
      fill: $c-dark;
      transition: all .1s linear;

      &:hover {
        fill: $c-accent;
      }
    }
  }
}

.column {
  grid-area: column;
}
</style>

