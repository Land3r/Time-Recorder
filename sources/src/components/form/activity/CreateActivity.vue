<template>
  <q-card style="min-width: 30vw; max-width: 90vw;">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Ajouter une activité</div>
    </q-card-section>

    <q-card-section>
      <q-input
        label="Nom"
        v-model="form.name"
        @blur="$v.form.name.$touch"
        :error="$v.form.name.$error"
      />

      <q-input
        label="Label"
        v-model="form.label"
        @blur="$v.form.label.$touch"
        :error="$v.form.label.$error"
      />

      <q-select
        use-input
        input-debounce="0"
        label="Icone"
        v-model="form.icon"
        @blur="$v.form.icon.$touch"
        @filter="filterIcons"
        :options="icons"
        :error="$v.form.icon.$error"
      >
        <template v-slot:prepend>
          <q-icon :name="form.icon" />
        </template>
        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            <q-item-section avatar>
              <q-icon :name="scope.opt" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt" />
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Pas de resultats
            </q-item-section>
          </q-item>
        </template>
      </q-select>

    </q-card-section>

    <q-card-actions class="bg-white" align="right">
      <q-btn flat label="Annuler" class="float-left" v-close-dialog />
      <q-btn flat label="Créer" class="text-primary float-right" @click="submit()" :v-close-dialog="isValid"/>
    </q-card-actions>
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
import icons from '../../../data/icons'

export default {
  name: 'CreateActivityForm',
  props: {
    closeDialog: {
      type: Function,
      required: true
    },
    mode: {
      type: String,
      required: true,
      validator: function (value) {
        return ['default', 'project'].indexOf(value) !== -1
      }
    },
    project: {
      type: Object,
      required: false,
      default: function () {
        return { id: 0 }
      }
    }
  },
  data: function () {
    return {
      form: {
        name: '',
        label: '',
        icon: ''
      },
      icons: icons
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      label: {},
      icon: { required }
    }
  },
  methods: {
    submit: function () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        if (this.mode === 'default') {
          const activity = {
            id: this.getNextDefaultId,
            order: this.getNextDefaultOrder,
            name: this.form.name,
            ...(this.form.label !== '' && { label: this.form.label }),
            icon: this.form.icon
          }

          this.addDefaultActivity(activity)
        } else if (this.mode === 'project') {
          const activity = {
            id: this.getNextProjectId(this.project.id),
            order: this.getNextProjectOrder(this.project.id),
            name: this.form.name,
            ...(this.form.label !== '' && { label: this.form.label }),
            icon: this.form.icon
          }

          this.addProjectActivity(this.project.id, activity)
        }
        this.closeDialog()
      }
    },
    filterIcons: function (val, update) {
      if (val === '') {
        update(() => {
          this.icons = icons
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.icons = icons.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    ...mapActions('projects', [
      'addProjectActivity'
    ]),
    ...mapActions('settings', [
      'addDefaultActivity'
    ]),
    ...mapGetters('projects', {
      getNextProjectId: 'getNextProjectActivityId',
      getNextProjectOrder: 'getNextProjectActivityOrder'
    })
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    },
    ...mapGetters('settings', {
      getNextDefaultId: 'getNextDefaultActivityId',
      getNextDefaultOrder: 'getNextDefaultActivityOrder'
    })
  }
}
</script>