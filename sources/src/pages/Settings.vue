<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Paramètres
      </h1>
    </div>

    <q-list bordered>
      <q-expansion-item group="settings" icon="perm_identity" key="user" label="Utilisateur" default-opened :header-class="getHeaderClass('user')" @show="setActiveExpansionItem('user')">
        <app-editprofileform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="list" key="activities" label="Activités" :header-class="getHeaderClass('activities')" @show="setActiveExpansionItem('activities')">
        <q-card>
          <h3>
            Activités par defaut
            <q-btn round color="positive" icon="add" class="float-right" @click="addDefaultActivityModalShown = true"/>
          </h3>
          <q-list bordered class="q-pa-md">
            <template v-if="defaultActivities.length == 0">
              <q-item class="bg-grey cursor-disabled">
                <q-item-section top avatar>
                  <q-avatar color="grey" icon="highlight_off" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Aucune activité</q-item-label>
                  <q-item-label caption lines="1">Commencez par ajouter une activité</q-item-label>
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
        </q-card>

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
              <span class="q-mx-sm">Etes vous sur de vouloir supprimer l'activité <strong>{{activeDefaultActivity.name}}</strong> ?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Annuler" v-close-dialog />
              <q-btn flat label="Supprimer" color="primary" @click="removeDefaultActivity(activeDefaultActivity.id)" v-close-dialog />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-expansion-item>
      <q-expansion-item group="settings" icon="timer" key="recorder" label="Enregisteur" :header-class="getHeaderClass('recorder')" @show="setActiveExpansionItem('recorder')">
        <app-editsystemeventsform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="import_export" key="import_export" label="Import / Export" :header-class="getHeaderClass('import_export')" @show="setActiveExpansionItem('import_export')">
        <q-card>
          <h3>Export</h3>
          <h3>Import</h3>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="settings" icon="delete_forever" key="reset" label="Reset" :header-class="getHeaderClass('reset')" @show="setActiveExpansionItem('reset')">
        <q-card>
          <h3>Reset</h3>
          <br />
          <center>
            <q-btn color="negative" @click="confirmResetStateDialogShown = true">Reset</q-btn>
          </center>
          <br />
        </q-card>

        <q-dialog v-model="confirmResetStateDialogShown" persistent transition-show="scale" transition-hide="scale">
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="delete" color="primary" text-color="white" />
              <span class="q-mx-sm">Etes vous sur de vouloir reinitialiser l'application ?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Annuler" v-close-dialog />
              <q-btn flat label="Reinitialiser" color="negative" @click="resetState()" v-close-dialog />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<style>
.visible-on-hover {
  visibility: hidden
}

div.q-item:hover .visible-on-hover {
  visibility: initial
}
</style>

<script>
import { mapActions } from 'vuex'
import draggable from 'vuedraggable'

import CreateActivityForm from '../components/form/activity/CreateActivity'
import EditActivityForm from '../components/form/activity/EditActivity'
import EditProfileForm from '../components/form/settings/EditProfile'
import EditSystemEventsForm from '../components/form/settings/EditSystemEvents'

export default {
  name: 'SettingsIndex',
  components: {
    draggable,
    'app-editprofileform': EditProfileForm,
    'app-editsystemeventsform': EditSystemEventsForm,
    'app-createactivityform': CreateActivityForm,
    'app-editactivityform': EditActivityForm
  },
  data: function () {
    return {
      activeExpansionItem: 'user',
      activeDefaultActivity: {
        id: 0,
        name: ''
      },
      'addDefaultActivityModalShown': false,
      'editDefaultActivityModalShown': false,
      'confirmDeleteDefaultActivityDialogShown': false,
      'confirmResetStateDialogShown': false
    }
  },
  methods: {
    getHeaderClass: function (key) {
      return this.activeExpansionItem === key ? 'text-primary' : ''
    },
    setActiveExpansionItem: function (key) {
      this.activeExpansionItem = key
    },
    setActiveDefaultActivity: function (activity) {
      this.activeDefaultActivity = {
        ...activity
      }
    },
    ...mapActions('settings', [
      'removeDefaultActivity'
    ]),
    ...mapActions([
      'resetState'
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
  }
}
</script>
