<template>
  <div class="grid">
    <header />
    <main class="about">
      <div class="text">
        <h2 class="title">Hello! 👋🏻</h2>
        <div class="description">
          <p>My name is Nazym Jumadilova.</p>
          <p>
            I'm a Senior Frontend Engineer with {{ yearsOfExperience }} years of
            experience in web development. Currently —
            <a
              class="link"
              target="_blank"
              rel="noopener"
              href="https://www.deliveryhero.com/"
              >Delivery Hero</a
            >
            (Berlin, Germany).
          </p>
          <p>
            I focus on responsive web design, frontend security, and performance
            and strive to create web applications that are aesthetically
            beautiful, fast, stable, and secure.
          </p>
        </div>
      </div>
      <LinkList :links="socialLinks" />
    </main>
    <aside class="column" />
  </div>
</template>

<script>
import { differenceInMonths } from "date-fns";
import LinkList from "../components/LinkList";

export default {
  components: {
    LinkList,
  },

  data() {
    return {
      socialLinks: [
        {
          name: "github",
          icon: require("~/assets/img/github.svg"),
          href: "https://github.com/rustcohlnikov",
        },
        {
          name: "linkedin",
          icon: require("~/assets/img/linkedin.svg"),
          href: "https://linkedin.com/in/nazymjumadilova",
        },
        {
          name: "instagram",
          icon: require("~/assets/img/instagram.svg"),
          href: "https://www.instagram.com/relerin",
        },
        {
          name: "unsplash",
          icon: require("~/assets/img/unsplash.svg"),
          href: "https://unsplash.com/@relerin",
        },
      ],
    };
  },

  computed: {
    yearsOfExperience() {
      const monthsInYear = 12;
      const careerStartDate = new Date(2014, 8, 1, 0, 0, 0);
      const now = new Date();
      const monthsDiff = differenceInMonths(now, careerStartDate);

      return Math.floor(monthsDiff / monthsInYear);
    },
  },
};
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

.title {
  margin-bottom: 1.5rem;
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
}

.text {
  width: 420px;
  height: 300px;

  @include md {
    width: 100%;
    height: auto;
  }
}

.description {
  p {
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
  }
}

.column {
  grid-area: column;
}
</style>

