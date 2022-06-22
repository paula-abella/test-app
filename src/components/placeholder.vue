<template>
  <div>
    <span v-if="legend" class="inline-block uppercase sm-text--small text-grey-neu-dark">{{ legend }}</span>
    <sm-page-title v-if="title" :title="title" class="mb-12"></sm-page-title>
    <h2 v-if="subtitle" class="mb-32">
      {{ subtitle }}
    </h2>

    <sm-loading-dashboard v-if="mode === 1">
      <sm-loading-long-card></sm-loading-long-card>
      <div style="display:flex">
        <sm-loading-small-card class="w-1/2"></sm-loading-small-card>
        <sm-loading-small-card class="w-1/2"></sm-loading-small-card>
      </div>
      <sm-loading-graph-card></sm-loading-graph-card>
    </sm-loading-dashboard>

    <sm-loading-form v-if="mode === 2" count="2" />

    <sm-loading-table v-if="mode === 3" totalRows="5" totalColumns="5" />

    <div class="grid grid-cols-1 tablet:grid-cols-2 large-desktop:grid-cols-3 gap-24" v-if="mode === 4">
      <sm-loading-image
        v-for="i in 9"
        :key="i"
        style="height: 188px; width: 100%"
      />
    </div>

    <sm-loading-card v-if="mode === 5" count="8" stacked />

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Placeholder',

  props: ['title', 'mode', 'subtitle', 'legend'],

  data() {
    return {
    }
  },

  computed: {}
})
</script>
