<template>
<div>
  <div class="row">
    <div class="col q-px-xs">
      <span class="text-h5">Projet</span>
      <br />
      <div>
        <q-list bordered separator>
          <q-item
            v-for="project in projects"
            :key="project.id"
            clickable
            v-ripple
            :class="getProjectClass(project)"
            :font-color="project.fontcolor"
            @click="selectedProject = project"
          >
            <q-item-section>
              {{project.name}}
            </q-item-section>
            <q-item-section side>
              <q-badge color="negative">{{project.activities.length}}</q-badge>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="col q-px-xs">
      <span class="text-h5">Activité</span>
      <br />
      <div>
        <template v-if="selectedProject !== null">
          <q-list bordered separator>
            <q-item
              v-for="activity in selectedProject.activities"
              :key="activity.id"
              clickable
              v-ripple
              :class="getActivityClass(activity)"
              @dblclick="onProjectDblClick(activity)"
              @contextmenu="contextActivity = activity"
            >
              <q-item-section avatar>
                <q-icon :name="activity.icon" />
              </q-item-section>
              <q-item-section>{{activity.name}}</q-item-section>
              <q-item-section avatar v-if="selectedActivity !== null && selectedActivity.id === activity.id">
                <q-circular-progress indeterminate color="warning" />
              </q-item-section>
              <q-menu touch-position context-menu>
                <q-list dense style="min-width: 100px">
                  <q-item clickable v-close-menu>
                    <q-item-section>Modifier activité courante</q-item-section>
                  </q-item>
                  <q-item clickable v-close-menu>
                    <q-item-section>Changer d'activité</q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-menu
                    :disable="!(contextActivity !== null && contextActivity.id === selectedActivity.id)"
                    @click="cancelCurrentSegment"
                    >
                    <q-item-section>Annuler activité courante</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </template>
        <template v-else>
          <p>
            Veuillez selectionner un projet
          </p>
        </template>
      </div>
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
import { mapState, mapActions, mapGetters } from 'vuex'
import { date, uid } from 'quasar'

export default {
  name: 'ActivitiesPanel',
  components: {
  },
  data: function () {
    return {
      dateDifference: this.updateTimer(),
      currentDay: date.formatDate(Date.now(), 'dddd DD MMMM YYYY'),
      selectedProject: null,
      selectedActivity: null,
      contextActivity: null
    }
  },
  timers: {
    updateTimer: { time: 1000, autostart: true, repeat: true }
  },
  methods: {
    updateTimer: function () {
      if (this.isRecording && this.record != null && this.record.startedAt != null) {
        const dateDifference = date.getDateDiff(Date.now(), this.record.startedAt, 'seconds')
        const hours = Math.floor(dateDifference / 3600).toLocaleString('fr-fr', { minimumIntegerDigits: 2 })
        const minutes = Math.floor((dateDifference % 3600) / 60).toLocaleString('fr-fr', { minimumIntegerDigits: 2 })
        const seconds = Math.floor((dateDifference % 3600) % 60).toLocaleString('fr-fr', { minimumIntegerDigits: 2 })
        this.dateDifference = `${hours}:${minutes}:${seconds}`
      }
    },
    onProjectDblClick: function (activity) {
      if (!this.isRecording) {
        this.$q.dialog({
          title: 'Démarrer un enregistrement ?',
          message: `Aucun enregistrement n'est pour l'instant demarré. Voulez vous démarrer un enregistrement sur l'activité ${this.selectedProject.name}: ${activity.name} ?`,
          ok: {
          },
          cancel: {
            name: 'Annuler',
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          this.startRecord()
        }).onOk(() => {
          // TODO: Start segment
        }).onCancel(() => {
        })
      }
    },
    toggleRecording: function () {
      if (this.isRecording) {
        this.dateDifference = '00:00:00'
        this.endRecord()
      } else {
        this.startRecord({
          id: uid(),
          comment: 'Random day'
        })
      }
    },
    getProjectClass: function (project) {
      if (this.selectedProject !== null && this.selectedProject.id === project.id) {
        return `${project.bgcolor} ${project.textcolor}`
      } else {
        return `black`
      }
    },
    getActivityClass: function (activity) {
      if (this.selectedActivity !== null && this.selectedActivity.id === activity.id) {
        return `bg-positive`
      } else {
        return ``
      }
    },
    ...mapActions('records', {
      startRecord: 'startRecord',
      endRecord: 'endRecord',
      startSegment: 'startSegment',
      endSegment: 'endSegment',
      editSegment: 'editSegment',
      cancelSegment: 'cancelSegment'
    })
  },
  computed: {
    ...mapGetters('records', [
      'getRecordStatusClass',
      'isInSegment',
      'getCurrentSegmentActivityName'
    ]),
    ...mapState('records', {
      isRecording: 'isRecording',
      record: 'currentRecord',
      segment: 'currentSegment'
    }),
    ...mapState('projects', [
      'projects'
    ])
  },
  watch: {
    selectedActivity: function (newSelectedActivity, oldSelectedActivity) {
      if (oldSelectedActivity === null) {
        // Start segment
        this.startSegment(newSelectedActivity)
        this.$q.notify({
          message: 'Activitée démarrée.',
          color: 'positive'
        })
      } else {
        // End segment
        this.endSegment()
        // Start segment
        this.startSegment(newSelectedActivity)
        this.$q.notify({
          message: 'Activitée changée.',
          color: 'positive'
        })
      }
    }
  }
}
</script>
