<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AsideLayout from '../../components/aside-layout.vue'

export default defineComponent({
  name: 'direct-booking-rates',

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
          <sm-vertical-nav-item label="Direct booking rates" to="/direct-booking/direct-booking-rates" />
        </sm-vertical-nav>
      </sm-aside>
    </template>

    <!-- Content -->
    <sm-page-title title="Direct booking rates" class="mb-12"></sm-page-title>

    <p>Add your content here...</p>
  </aside-layout>
</template>

<style lang="scss" scoped>
</style>
