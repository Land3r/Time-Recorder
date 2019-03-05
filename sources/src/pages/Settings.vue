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
          Nom d'utilisateur
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="settings" icon="perm_identity" key="activities" label="Activités" :header-class="getHeaderClass('activities')" @click="setActiveExpansionItem('activities')">
        <q-card>
          <h3>Activités par default</h3>
        </q-card>
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
</style>

<script>
export default {
  name: 'SettingsIndex',
  data: function () {
    return {
      activeExpansionItem: 'user'
    }
  },
  methods: {
    getHeaderClass: function (key) {
      return this.activeExpansionItem === key ? 'text-primary' : ''
    },
    setActiveExpansionItem: function (key) {
      this.activeExpansionItem = key
    }
  }
}
</script>
