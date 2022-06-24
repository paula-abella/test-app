<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AsideLayout from '../components/aside-layout.vue'

export default defineComponent({
  name: 'empty',

  components: {
    AsideLayout,
  },

  props: {},
})
</script>

<template>
  <aside-layout :full-width="true">

    <sm-page-title title="Page title" class="mb-12"></sm-page-title>

    <p>Add your content here...</p>

  </aside-layout>
</template>

<style lang="scss" scoped>
</style>
