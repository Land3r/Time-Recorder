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
            @click="contextProject = project"
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
        <template v-if="contextProject !== null">
          <q-list bordered separator>
            <q-item
              v-for="activity in contextProject.activities"
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
                  <q-item clickable v-close-menu @click="changeSegmentMenuBtn()">
                    <q-item-section>Changer d'activité</q-item-section>
                  </q-item>
                  <q-item clickable v-close-menu @click="editCurrentSegmentMenuBtn()">
                    <q-item-section>Modifier activité courante</q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-menu
                    :disable="!(contextActivity !== null && segment !== null && contextActivity.id === segment.id)"
                    @click="cancelCurrentSegmentMenuBtn()"
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

import { RecordFactory } from '../../../domain/record'
import { SegmentFactory } from '../../../domain/segment'

export default {
  name: 'ActivitiesPanel',
  components: {
  },
  data: function () {
    return {
      dateDifference: this.updateTimer(),
      currentDay: date.formatDate(Date.now(), 'dddd DD MMMM YYYY'),
      contextProject: null,
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
    cancelCurrentSegmentMenuBtn: function () {
      this.cancelSegment()
    },
    editCurrentSegmentMenuBtn: function () {
      const project = this.contextProject
      const activity = this.contextActivity
      const segment = SegmentFactory.Edit(this.segment, {
        project: { name: project.name, id: project.id },
        color: project.color,
        icon: activity.icon,
        activity: { name: activity.name, id: activity.id }
      })
      console.log(segment)
      this.editSegment(segment)
    },
    changeSegmentMenuBtn: function () {
      this.endSegment()
      const segment = SegmentFactory.Create({

      })
      this.startSegment(segment)
    },
    onProjectDblClick: function (activity) {
      if (!this.isRecording) {
        this.$q.dialog({
          title: 'Démarrer un enregistrement ?',
          message: `Aucun enregistrement n'est pour l'instant demarré. Voulez vous démarrer un enregistrement sur l'activité ${this.contextProject.name}: ${activity.name} ?`,
          ok: {
          },
          cancel: {
            name: 'Annuler',
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          const record = RecordFactory.Create({
            startedAt: Date.now()
          })
          this.startRecord(record)
        }).onOk(() => {
          const segment = SegmentFactory.Create({
            startedAt: this.record.startedAt,
            project: { name: this.contextProject.name, id: this.contextProject.id },
            color: this.contextProject.color,
            icon: this.contextActivity.icon,
            activity: { name: this.contextActivity.name, id: this.contextActivity.id }
          })
          this.startSegment(segment)
        }).onCancel(() => {})
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
      if (this.contextProject?.id === project.id) {
        return `${project.bgcolor} ${project.textcolor}`
      } else {
        return `black`
      }
    },
    getActivityClass: function (activity) {
      if (this.segment?.id === activity.id) {
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
