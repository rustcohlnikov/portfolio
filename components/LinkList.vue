<template>
  <div class="social">
    <ul class="list">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="list__item"
      >
        <a
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="list__link"
        >
          {{ link.name }}
          <img
            :src="link.icon"
            :alt="link.name"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.social {
    width: 420px;
    height: auto;
    margin-bottom: 3rem;

    @include md {
        width: 100%;
        margin-bottom: 1rem;
    }
}

.list {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__item {
        display: inline-block;
    }

    &__link {
		line-height: 0;
		font-size: 0;
		color: transparent;
        text-decoration: none;
        color: inherit;
    }
}
</style>
