<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        {{$t('homepage.title')}}
      </h1>
    </div>
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        :title="$t('homepage.step1.title')"
        icon="play_arrow"
        :done="step > 1"
      >
        {{$t('homepage.step1.details')}}
        <br /><br />
        {{$t('homepage.step1.commentlabel')}}
        <q-editor
          v-model="form.comment"
          min-height="5rem"
          :toolbar="[
            ['left', 'center', 'right', 'justify'],
            ['bold', 'italic', 'strike', 'underline'],
            ['hr', 'link'],
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
        <q-stepper-navigation>
          <q-btn @click="step1Btn()" color="primary" :label="$t('homepage.step1.buttonlabel')" icon="play_arrow" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title="$t('homepage.step2.title')"
        :caption="$t('common.optional')"
        icon="business"
        :done="step > 2"
      >
        {{$t('homepage.step2.details')}}
        <q-select
          :label="$t('homepage.step2.projectlabel')"
          v-model="form.project"
          :options="projectOptions"
          @input="step2Select"
        >
        </q-select>
        <br />
        <q-stepper-navigation>
          <q-btn :hidden="!showContinueBtn" @click="step = 3" color="primary" :label="$t('buttons.next')" />
          <q-btn flat @click="ignoreBtn()" color="primary" :label="$t('buttons.ignore')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        :title="$t('homepage.step3.title')"
        :caption="$t('common.optional')"
        icon="list"
      >
        {{$t('homepage.step3.details')}}
        <q-select
            :label="$t('homepage.step3.activitylabel')"
            v-model="form.activity"
            :options="activitiesOptions"
            @input="step3Select"
          >
          </q-select>
          <br />
        <q-stepper-navigation>
          <q-btn flat @click="step3BackBtn()" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'

import { RecordFactory } from '../domain/record'
import { SegmentFactory } from '../domain/segment'

export default {
  name: 'PageIndex',
  data: function () {
    return {
      form: {
        comment: '',
        project: null,
        activity: null
      },
      step: 1,
      showContinueBtn: false,
      projectOptions: [],
      activitiesOptions: []
    }
  },
  methods: {
    step1Btn: function () {
      const record = RecordFactory.Create({
        startedAt: Date.now(),
        comment: this.form.comment
      })
      console.log('Pushing record start: ' + record.startedAt)
      this.startRecord(record)
      this.step = 2
    },
    step2Select: function () {
      this.step = 3
    },
    step3Select: function () {
      this.step = 4
    },
    step3BackBtn: function () {
      this.showContinueBtn = true
      this.step = 2
    },
    ignoreBtn: function () {
      this.step = 4
    },
    ...mapActions('records', [
      'startRecord',
      'startSegment'
    ])
  },
  computed: {
    ...mapState('projects', [
      'projects'
    ]),
    ...mapState('records', [
      'isRecording',
      'currentRecord',
      'currentSegment'
    ])
  },
  created: function () {
    // Prevent user to use this page if a record is already in progress.
    if (this.isRecording) {
      this.$q.notify({
        message: this.$t('homepage.errorisrecording'),
        color: 'negative'
      })
      this.$router.push('/recorder')
    }
    this.projectOptions = this.projects.map(project => ({ label: project.name, value: project.id, color: project.color }))
  },
  watch: {
    step: function (newStep, previousStep) {
      if (newStep === 3) {
        this.activitiesOptions = this.projects.filter(project => (project.id === this.form.project.value))[0].activities.map(activity => ({ label: activity.name, value: activity.id, icon: activity.icon }))
      }
      if (newStep === 4) {
        let message
        if (this.form.project !== null && this.form.activity !== null) {
          console.log('Pushing segment start: ' + this.currentRecord.startedAt)
          const segment = SegmentFactory.Create({
            startedAt: this.currentRecord.startedAt,
            project: { name: this.form.project.label, id: this.form.project.value },
            color: this.form.project.color,
            icon: this.form.activity.icon,
            activity: { name: this.form.activity.label, id: this.form.activity.value }
          })
          this.startSegment(segment)

          message = this.$t('homepage.step3.successactivity', { project: this.form.project.label, activity: this.form.activity.label })
        } else {
          message = this.$t('homepage.step3.successnoactivity')
        }
        this.$q.notify({
          message: message,
          color: 'positive',
          icon: 'timer'
        })
        this.$router.push('/recorder')
      }
    }
  }
}
</script>
