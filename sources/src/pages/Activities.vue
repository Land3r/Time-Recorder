<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Activités
        <q-btn round color="positive" icon="add" class="float-right" @click="addProjectModalShown = true"/>
      </h1>
    </div>
    <div class="row">
      <div class="col-md-4 q-pa-xs"
        v-for="project in projects"
        :key="project.id"
      >
        <q-toolbar
          :class="project.bgcolor"
          class="text-white shadow2"
        >
          <q-toolbar-title>{{project.name}}</q-toolbar-title>
          <q-btn flat round dense icon="more_vert">
            <q-menu
              :class="project.bgcolor"
              class="text-white"
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list style="min-width: 200px">
                <q-item clickable v-close-menu>
                  <q-item-section avatar>
                    <q-icon
                      name="edit"
                      :color="project.color"
                    />
                  </q-item-section>
                  <q-item-section>Modifier</q-item-section>
                </q-item>
                <q-item clickable v-close-menu>
                  <q-item-section avatar>
                    <q-icon
                      name="add"
                      :color="project.color"
                    />
                  </q-item-section>
                  <q-item-section>Ajouter activitée</q-item-section>
                </q-item>
                <q-item clickable v-close-menu>
                  <q-item-section avatar>
                    <q-icon
                      name="list"
                      :color="project.color"
                    />
                  </q-item-section>
                  <q-item-section>Modifier activitées</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="showConfirmDeleteProjectModal(project.name)" v-close-menu>
                  <q-item-section avatar>
                    <q-icon
                      name="delete"
                      color="negative"
                    />
                  </q-item-section>
                  <q-item-section>Supprimer</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>

        <q-list bordered>
          <q-item
            v-for="activity in project.activities"
            :key="activity.id"
            class="q-my-sm"
            clickable
            v-ripple
          >
            <q-item-section top avatar>
              <q-avatar
                :color=project.color
                :icon=activity.icon
                :text-color=project.fontcolor
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ activity.name }}</q-item-label>
              <q-item-label caption lines="1">{{ activity.label }}</q-item-label>
            </q-item-section>

            <q-separator />
          </q-item>
        </q-list>
      </div>
    </div>

    <q-dialog v-model="addProjectModalShown" persistent transition-show="scale" transition-hide="scale">
      <q-card style="width: 300px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Ajouter un projet</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="formCreateProject.name" label="Nom" />

          <q-select v-model="formCreateProject.color" :options="colors" label="Couleur">
          </q-select>

          <q-select v-model="formCreateProject.bgcolor" :options="colors" label="Back Couleur" />

          <q-select v-model="formCreateProject.textcolor" :options="colors" label="Texte Couleur" />

          <q-toggle
            v-model="formCreateProject.importStandardActivities"
            color="primary"
            label="Importer les activités standard"
            right-label
            keep-color
          />

        </q-card-section>

        <q-card-actions class="bg-white" align="right">
          <q-btn flat label="Fermer" class="float-left" v-close-dialog />
          <q-btn flat label="OK" class="text-primary float-right" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirmDeleteProjectDialogShown" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-mx-sm">Etes vous sur de vouloir supprimer le projet <strong>{{confirmDeleteProjectDialog.name}}</strong></span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Annuler" v-close-dialog />
          <q-btn flat label="Supprimer" color="primary" v-close-dialog />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import colors from '../data/colors'

export default {
  name: 'PageActivities',
  data: () => {
    return {
      addProjectModalShown: false,
      addProjectActivityModalShown: false,
      confirmDeleteProjectDialogShown: false,
      confirmDeleteProjectDialog: {
        name: ''
      },
      formCreateProject: {
        name: '',
        color: '',
        bgcolor: '',
        textcolor: '',
        importStandardActivities: false
      },
      colors: colors
    }
  },
  methods: {
    showConfirmDeleteProjectModal: function (projectName) {
      this.confirmDeleteProjectDialog.name = projectName
      this.confirmDeleteProjectDialogShown = true
    }
  },
  computed: mapState({
    projects: state => state.projects.projects
  })
}
</script>
