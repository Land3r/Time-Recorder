<template>
  <div>
    <span>Record</span>
    <q-editor v-model="record">
    </q-editor>
    <hr />
    <span>Segment</span>
    <q-editor v-model="segment">
    </q-editor>
  </div>
</template>

<style>

</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TempPage',
  components: {
  },
  data: function () {
    return {
      record: '',
      segment: ''
    }
  },
  methods: {

  },
  computed: {
    ...mapState('records', [
      'currentRecord',
      'currentSegment'
    ])
  },
  created: function () {
    this.record = JSON.stringify(this.currentRecord)
    this.segment = JSON.stringify(this.currentSegment)
  }
}
</script>
