<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Réglages
      </h1>
    </div>

    <q-list bordered>
      <q-expansion-item group="settings" icon="perm_identity" key="user" label="Utilisateur" default-opened :header-class="getHeaderClass('user')" @click="setActiveExpansionItem('user')">
        <q-card>
          <h3>Mon profil</h3>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="settings" icon="perm_identity" key="activities" label="Activités" :header-class="getHeaderClass('activities')" @click="setActiveExpansionItem('activities')">
        <q-card>
          <h3>
            Activités par defaut
            <q-btn round color="positive" icon="add" class="float-right" @click="addDefaultActivitiesModalShown = true"/>
          </h3>
          <q-list bordered>
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
              <q-item
                v-for="activity in defaultActivities"
                :key="activity.id"
                class="q-my-sm"
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
                  <div class="q-gutter-xs">
                    <q-btn class="visible-on-hover" flat dense round icon="edit" />
                    <q-btn class="visible-on-hover" flat dense round icon="delete" />
                  </div>
                </q-item-section>
                <q-separator />
              </q-item>
            </template>
          </q-list>
        </q-card>

        <q-dialog v-model="addDefaultActivitiesModalShown" persistent transition-show="scale" transition-hide="scale">
          <app-createactivityform
            mode='default'
            :closeDialog="(value) => {addDefaultActivitiesModalShown = value}"
          />
        </q-dialog>
      </q-expansion-item>
      <q-expansion-item group="settings" icon="timer" key="recorder" label="Enregisteur" :header-class="getHeaderClass('recorder')" @click="setActiveExpansionItem('recorder')">
        <q-card>
          <h3>Activités par default</h3>
        </q-card>
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
import { mapState } from 'vuex'

import CreateActivityForm from '../components/form/activity/CreateActivity'

export default {
  name: 'SettingsIndex',
  components: {
    'app-createactivityform': CreateActivityForm
  },
  data: function () {
    return {
      activeExpansionItem: 'user',
      'addDefaultActivitiesModalShown': false
    }
  },
  methods: {
    getHeaderClass: function (key) {
      return this.activeExpansionItem === key ? 'text-primary' : ''
    },
    setActiveExpansionItem: function (key) {
      this.activeExpansionItem = key
    }
  },
  computed: {
    ...mapState('settings', [
      'defaultActivities'
    ])
  }
}
</script>
