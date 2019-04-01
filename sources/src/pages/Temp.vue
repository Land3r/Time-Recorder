<template>
<div>
  <div class="row">
    <div class="col">
      <span>Record</span>
      <q-editor v-model="record">
      </q-editor>
    </div>
    <div class="col">
      <span>Segment</span>
      <q-editor v-model="segment">
      </q-editor>
    </div>
    <hr />
  </div>
  <div class="row">
    <span>Records</span>
    <q-editor v-model="records">
    </q-editor>
  </div>
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
      segment: '',
      records: ''
    }
  },
  methods: {

  },
  computed: {
    ...mapState('records', [
      'currentRecord',
      'currentSegment',
      'records'
    ])
  },
  created: function () {
    this.record = JSON.stringify(this.currentRecord)
    this.segment = JSON.stringify(this.currentSegment)
    this.records = JSON.stringify(this.records)
  }
}
</script>
