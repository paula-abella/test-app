<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AsideLayout from '../components/aside-layout.vue'

export default defineComponent({
  name: 'dashboard',

  components: {
    AsideLayout,
  },

  props: {},
})
</script>

<template>
  <aside-layout :full-width="true">
    <sm-loading-dashboard>
      <sm-loading-long-card />

      <div style="display: flex">
        <sm-loading-small-card class="w-1/2"></sm-loading-small-card>
        <sm-loading-small-card class="w-1/2"></sm-loading-small-card>
      </div>

      <sm-loading-graph-card />

    </sm-loading-dashboard>
  </aside-layout>
</template>

<style lang="scss" scoped>
</style>
