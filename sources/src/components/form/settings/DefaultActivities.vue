<template>
  <q-card>
    <h3>
      {{$t('settingspage.defaultactivities.title')}}
      <q-btn round color="positive" icon="add" class="float-right" @click="addDefaultActivityModalShown = true"/>
    </h3>
    <q-list bordered class="q-pa-md">
      <template v-if="defaultActivities.length == 0">
        <q-item class="bg-grey cursor-disabled">
          <q-item-section top avatar>
            <q-avatar color="grey" icon="highlight_off" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('settingspage.defaultactivities.noactivities.label')}}</q-item-label>
            <q-item-label caption lines="1">{{$t('settingspage.defaultactivities.noactivities.sublabel')}}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-else>
        <draggable
          v-model="defaultActivities"
        >
          <q-item
            v-for="activity in defaultActivities"
            :key="activity.id"
            :itemid="activity.id"
            @mouseover="setActiveDefaultActivity(activity)"
            class="q-my-sm draggable"
            clickable
            v-ripple
          >
            <q-item-section top avatar>
              <q-avatar color="primary" text-color="white"
                :icon=activity.icon
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ activity.name }}</q-item-label>
              <q-item-label caption lines="1">{{ activity.label }}</q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="q-gutter-sm">
                <q-btn class="visible-on-hover" icon="edit" color="primary" @click="editDefaultActivityModalShown = true" flat dense round />
                <q-btn class="visible-on-hover" icon="delete" color="red" @click="confirmDeleteDefaultActivityDialogShown = true" flat dense round />
              </div>
            </q-item-section>
            <q-separator />
          </q-item>
        </draggable>
      </template>
    </q-list>
    <q-dialog v-model="addDefaultActivityModalShown" persistent transition-show="scale" transition-hide="scale">
      <app-createactivityform
        mode='default'
        :closeDialog="(value) => {addDefaultActivityModalShown = value}"
      />
    </q-dialog>
    <q-dialog v-model="editDefaultActivityModalShown" persistent transition-show="scale" transition-hide="scale">
      <app-editactivityform
        mode='default'
        :activity="activeDefaultActivity"
        :closeDialog="(value) => {editDefaultActivityModalShown = value}"
      />
    </q-dialog>
    <q-dialog v-model="confirmDeleteDefaultActivityDialogShown" persistent transition-show="scale" transition-hide="scale">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-mx-sm" v-html="$t('form.activity.delete', {name: activeDefaultActivity.name})"></span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="$t('buttons.cancel')" v-close-dialog />
          <q-btn flat :label="$t('buttons.delete')" color="primary" @click="removeDefaultActivity(activeDefaultActivity.id)" v-close-dialog />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
import draggable from 'vuedraggable'
import { mapActions } from 'vuex'

import CreateActivityForm from '../activity/CreateActivity'
import EditActivityForm from '../activity/EditActivity'

export default {
  name: 'DefaultActivitiesForm',
  components: {
    draggable,
    'app-createactivityform': CreateActivityForm,
    'app-editactivityform': EditActivityForm
  },
  data: function () {
    return {
      activeDefaultActivity: {
        id: 0,
        name: ''
      },
      'addDefaultActivityModalShown': false,
      'editDefaultActivityModalShown': false,
      'confirmDeleteDefaultActivityDialogShown': false
    }
  },
  methods: {
    setActiveDefaultActivity: function (activity) {
      this.activeDefaultActivity = {
        ...activity
      }
    },
    ...mapActions('settings', [
      'removeDefaultActivity'
    ])
  },
  computed: {
    defaultActivities: {
      get () {
        return this.$store.state.settings.defaultActivities
      },
      set (value) {
        this.$store.dispatch('settings/setDefaultActivities', value)
      }
    }
  },
  created: function () {
  }
}
</script>
