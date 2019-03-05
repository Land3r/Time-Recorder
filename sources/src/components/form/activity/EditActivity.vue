<template>
  <q-card style="min-width: 30vw; max-width: 90vw;">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Modifier un projet</div>
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

    </q-card-section>

    <q-card-actions class="bg-white" align="right">
      <q-btn flat label="Annuler" class="float-left" @click="reset()" v-close-dialog />
      <q-btn flat label="Modifier" class="text-primary float-right" @click="submit()" :v-close-dialog="isValid"/>
    </q-card-actions>
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import colors from '../../../data/colors'

export default {
  name: 'EditActivityForm',
  props: [
    'project',
    'closeDialog'
  ],
  data: function () {
    return {
      form: {
        ...this.project
      },
      colors: colors
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      color: { required },
      textcolor: { required }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const editedProject = {
          id: this.form.id,
          order: this.form.order,
          name: this.form.name,
          color: this.form.color,
          bgcolor: 'bg-' + this.form.color,
          textcolor: this.form.textcolor,
          activities: [
            ...this.project.activities
          ]
        }

        this.editProject(editedProject)
        this.closeDialog()
      }
    },
    reset () {
      this.form = {
        id: 0,
        order: 0,
        name: '',
        color: 'primary',
        bgcolor: 'bg-primary',
        textcolor: 'black',
        activities: []
      }
    },
    ...mapActions('projects', {
      editProject: 'editProject'
    })
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    }
  }
}
</script>
