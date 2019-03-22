<template>
<div>
  <div class="row">
    <div class="col q-px-xs">
      <q-editor v-model="comment" min-height="5rem" />
    </div>
  </div>
  <q-card-actions>
    <q-btn flat @click="toggleRecording()" :label="isRecording ? 'Arrêter' : 'Démarrer'"></q-btn>
    <q-btn flat>Pause</q-btn>
  </q-card-actions>
</div>
</template>

<style>

</style>

<script>

export default {
  name: 'RecordPanel',
  components: {
  },
  data: function () {
    return {
      comment: ''
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
