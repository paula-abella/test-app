
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AsideLayout from '../../components/aside-layout.vue'

export default defineComponent({
  name: 'rate-plans',

  components: {
    AsideLayout,
  },

  props: {},
})
</script>

<template>
  <aside-layout :full-width="true">
    <!-- Sidebar -->
    <template v-slot:aside>
      <sm-aside>
        <sm-vertical-nav>
          <sm-vertical-nav-item label="Rate plans" to="/rooms-and-rates/rate-plans" />
          <sm-vertical-nav-item label="Room types" to="/rooms-and-rates/room-types" />
        </sm-vertical-nav>
      </sm-aside>
    </template>

    <!-- Content -->
    <template v-slot:default>
      <sm-page-title title="Room types" class="mb-12"></sm-page-title>

      <sm-loading-card count="2" stacked />
    </template>
  </aside-layout>
</template>

<style lang="scss" scoped>
</style>
