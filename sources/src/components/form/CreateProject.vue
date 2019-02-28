<template>
  <q-card style="min-width: 30vw; max-width: 90vw;">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Ajouter un projet</div>
    </q-card-section>

    <q-card-section>
      <q-input
        label="Nom"
        v-model="form.name"
        @blur="$v.form.name.$touch"
        :error="$v.form.name.$error"
      />

      <q-select
        label="Couleur"
        v-model="form.color"
        @blur="$v.form.color.$touch"
        :options="colors"
        :error="$v.form.color.$error"
      >
      </q-select>

      <q-select
        label="Couleur du texte"
        v-model="form.textcolor"
        @blur="$v.form.textcolor.$touch"
        :options="colors"
        :error="$v.form.textcolor.$error"
      >
      </q-select>
    </q-card-section>

    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Activités</div>
    </q-card-section>

    <q-card-section>
      <q-toggle
        v-model="form.importStandardActivities"
        color="primary"
        label="Importer les activités standard"
        right-label
        keep-color
      />
    </q-card-section>

    <q-card-actions class="bg-white" align="right">
      <q-btn flat label="Fermer" class="float-left" v-close-dialog />
      <q-btn flat label="OK" class="text-primary float-right" @click="submit()"/>
    </q-card-actions>
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import colors from '../../data/colors'

export default {
  name: 'CreateProjectForm',
  data: () => {
    return {
      form: {
        name: '',
        color: '',
        textcolor: '',
        importStandardActivities: false
      },
      colors: colors
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      color: { required },
      textcolor: { required },
      importStandardActivities: { required }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('Form invalid')
      } else {
        console.log('TODO: Form valid')
      }
    }
  }
}
</script>
