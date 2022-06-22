<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TheHeader from './header.vue'

export default defineComponent({
  name: 'aside-layout',

  components: {
    TheHeader,
  },

  props: {
    fullWidth: { type: Boolean, default: false },
    hideHorizontalNav: { type: Boolean, default: false },
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

      <div class="layout__content">
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
    background: #f5f9ff;
    min-height: calc(100vh - 57px);
    padding-top: 48px;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
  }

  @media (min-width: 1025px) {
    &__aside {
      display: block;
    }
  }
}
</style>
