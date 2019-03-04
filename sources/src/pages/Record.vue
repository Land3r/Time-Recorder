<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Enregisteur
        <div :class="getRecordStatusClass">&nbsp;</div>
      </h1>
      <q-btn @click="toggleRecording()">Toggle recording</q-btn>
    </div>
  </q-page>
</template>

<style>
.record-status {
  width: 20px;
  height: 20px;
  border-radius: 50%
}

.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

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
    getRecordStatusClass: function () {
      if (this.isRecording) {
        return 'record-status bg-red blink'
      } else {
        return 'record-status bg-grey'
      }
    },
    ...mapState('records', {
      isRecording: 'isRecording'
    })
  }
}
</script>
