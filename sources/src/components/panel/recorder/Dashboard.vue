<template>
<div>
  <div class="row q-pt-md">
    <div class="col q-px-xs">
      <q-slider
        v-model="percentage"
        :min="0"
        :max="100"
        label
        :label-value="`${percentage}%`"
        label-always
        readonly
        dense
      />
    </div>
  </div>
  <div class="row">
    <div class="col q-px-xs">
      <br />
      <span>Objectif: {{objectiveValue}}h/{{objectiveType}}</span>
    </div>
    <div class="col q-px-xs">

    </div>
  </div>
</div>
</template>

<style>

</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DashboardPanel',
  components: {
  },
  data: function () {
    return {
      percentage: 80,
      objectiveType: null,
      objectiveValue: null
    }
  },
  methods: {
  },
  computed: {
    ...mapState('settings', [
      'objective'
    ])
  },
  created: function () {
    this.objectiveType = this.objective?.type
    this.objectiveValue = this.objective?.value
  }
}
</script>
