<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import fourOhFour from './images/four-oh-four.json'

export default defineComponent({
  name: 'empty',

  components: {},

  props: {},

  setup() {
    const fourOhFourSrc = ref(fourOhFour)

    return {
      fourOhFourSrc,
    }
  }
})
</script>

<template>

  <div class="error">

    <sm-lottie-player root-class="error__image" :animation-data="fourOhFourSrc" :auto-load="true" :loop="2" />

    <h3 class="error__header sm-h3">Page not found</h3>

    <p class="error__description">We can’t find the page you’re looking for. Try using your browser’s back button or visit our homepage.</p>

    <div class="error__actions">
      <sm-button type="secondary" @click="$router.go(-1)">Go to previous page</sm-button>
      <sm-button type="primary" to="/">Go home</sm-button>
    </div>

  </div>

</template>

<style lang="scss" scoped>

.error {
  margin: 0 auto;
  text-align: center;

  &__image {
    margin: 0 auto;
    max-width: 1336px;
  }

  &__header,
  &__description {
    margin: 0 auto 8px auto;
    max-width: 428px;
  }

  &__description {
    margin-bottom: 32px;
  }
}

</style>
