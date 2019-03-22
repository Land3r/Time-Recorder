<template>
<div>
  <div class="row">
    <div class="col q-px-xs">
      <h3>Commentaire de l'enregistrement</h3>
      <q-editor
       v-model="comment"
       min-height="5rem"
       :toolbar="[
        ['left', 'center', 'right', 'justify'],
        ['bold', 'italic', 'strike', 'underline'],
        ['token', 'hr', 'link', 'custom_btn'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
        ['undo', 'redo']
      ]"
       />
    </div>
  </div>
  <q-card-actions>
    <q-btn @click="saveComment" color="primary" label='Sauvegarder' :disable="this.comment === this.currentRecord.comment"></q-btn>
  </q-card-actions>
</div>
</template>

<style>

</style>

<script>
import { mapState, mapActions } from 'vuex'

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
    saveComment: function () {
      if (!this.isRecording) {
        this.$q.dialog({
          title: 'Démarrer un enregistrement ?',
          message: `Aucun enregistrement n'est pour l'instant demarré. Voulez vous démarrer un enregistrement ?`,
          ok: {
          },
          cancel: {
            name: 'Annuler',
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          const record = {
            comment: this.comment
          }

          this.startRecord(record)
        }).onOk(() => {
          this.$q.notify({
            message: 'Enregistrement démarré',
            color: 'positive'
          })
        }).onCancel(() => {
        })
      } else {
        const record = {
          comment: this.comment
        }

        this.editRecord(record)
        this.$q.notify({
          message: 'Commentaire mis à jour',
          color: 'positive'
        })
      }
    },
    ...mapActions('records', [
      'editRecord',
      'startRecord'
    ])
  },
  computed: {
    ...mapState('records', [
      'isRecording',
      'currentRecord'
    ])
  },
  created: function () {
    if (this.currentRecord !== null && this.currentRecord.comment !== null) {
      this.comment = this.currentRecord.comment
    }
  }
}
</script>
