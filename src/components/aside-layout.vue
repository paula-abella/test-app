<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TheHeader from './header.vue'

export default defineComponent({
  name: 'aside-layout',

  components: {
    TheHeader,
  },

  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light',
      validator: (value: string) => ['light', 'dark'].includes(value),
    },
  },
})
</script>

<template>
  <div class="layout">

    <the-header />

    <article>
      <div class="layout__aside">
        <slot name="aside" />
      </div>

      <div
        class="layout__content"
        :class="{ 'layout__content--dark': theme === 'dark' }"
      >
        <sm-container
          :full-width="fullWidth"
          class="mx-auto"
        >
          <slot name="header" />

          <main id="mainContent">
            <slot />
          </main>
        </sm-container>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>

.layout {
  > article {
    display: flex;
  }

  &__aside {
    display: none;
  }

  &__content {
    // min-height: calc(100vh - 57px);
    padding-top: 48px;
    position: relative;
    flex-grow: 1;
    overflow: hidden;

    &--dark {
      background-color: #f5f9ff;
    }
  }

  @media (min-width: 1025px) {
    &__aside {
      display: block;
    }
  }
}
</style>
