<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Projets
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
          <q-btn flat round dense icon="more_vert" @click="setActiveProject(project)">
            <q-menu
              :class="project.bgcolor"
              class="text-white"
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list style="min-width: 200px">
                <q-item clickable @click="editProjectModalShown = true" v-close-menu>
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
                <q-item clickable @click="confirmDeleteProjectDialogShown = true" v-close-menu>
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
          <template v-if="project.activities.length == 0">
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
          </template>
        </q-list>
      </div>
    </div>

    <q-dialog v-model="addProjectModalShown" persistent transition-show="scale" transition-hide="scale">
      <app-createprojectform
        :closeDialog="(value) => {addProjectModalShown = value}"
      />
    </q-dialog>

    <q-dialog v-model="editProjectModalShown" persistent transition-show="scale" transition-hide="scale">
      <app-editprojectform
        :project="activeProject"
        :closeDialog="(value) => {editProjectModalShown = value}"
      />
    </q-dialog>

    <q-dialog v-model="confirmDeleteProjectDialogShown" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-mx-sm">Etes vous sur de vouloir supprimer le projet <strong>{{activeProject.name}}</strong> ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Annuler" v-close-dialog />
          <q-btn flat label="Supprimer" color="primary" @click="removeProject(activeProject.id)" v-close-dialog />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

import CreateProjectForm from '../components/form/project/CreateProject'
import EditProjectForm from '../components/form/project/EditProject'

export default {
  name: 'PageProjects',
  components: {
    'app-createprojectform': CreateProjectForm,
    'app-editprojectform': EditProjectForm
  },
  data: function () {
    return {
      addProjectModalShown: false,
      editProjectModalShown: false,
      activeProject: {
        id: 0,
        name: '',
        color: 'primary',
        bgcolor: 'bg-primary',
        textcolor: 'black',
        activities: []
      },
      addProjectActivityModalShown: false,
      confirmDeleteProjectDialogShown: false
    }
  },
  methods: {
    setActiveProject: function (project) {
      this.activeProject = {
        ...project
      }
    },
    ...mapActions('projects', [
      'removeProject'
    ])
  },
  computed: {
    ...mapGetters('projects', {
      projects: 'orderedProjects'
    })
  }
}
</script>
