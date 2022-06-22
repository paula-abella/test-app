<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AsideLayout from '../../components/aside-layout.vue'

export default defineComponent({
  name: 'inventory',

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
          <sm-vertical-nav-item label="Inventory" to="/distributions/inventory" />
          <sm-vertical-nav-item label="Channels" to="/distributions/channels" />
        </sm-vertical-nav>
      </sm-aside>
    </template>

    <!-- Content -->
    <sm-page-title title="Inventory" class="mb-12"></sm-page-title>

    <sm-loading-list count="8" />
  </aside-layout>
</template>

<style lang="scss" scoped>
</style>
