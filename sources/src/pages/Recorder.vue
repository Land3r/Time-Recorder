<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Enregisteur
        <div :class="getRecordStatusClass"></div>
      </h1>
      <q-btn @click="toggleRecording()">Toggle recording</q-btn>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageRecorder',
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
    toggleRecording: function () {
      if (this.isRecording) {
        this.endRecord()
      } else {
        this.startRecord()
      }
    },
    ...mapActions('records', {
      startRecord: 'startRecord',
      endRecord: 'endRecord'
    })
  },
  computed: {
    ...mapGetters('records', [
      'getRecordStatusClass'
    ]),
    ...mapState('records', {
      isRecording: 'isRecording'
    })
  }
}
</script>
