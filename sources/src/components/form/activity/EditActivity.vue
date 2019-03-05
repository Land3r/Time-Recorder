<template>
  <q-card style="min-width: 30vw; max-width: 90vw;">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Modifier une activité</div>
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
      <q-btn flat label="Modifier" class="text-primary float-right" @click="submit()" :v-close-dialog="isValid"/>
    </q-card-actions>
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import icons from '../../../data/icons'

export default {
  name: 'EditActivityForm',
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
    activity: {
      type: Object,
      required: true
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
        ...this.activity
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
            id: this.form.id,
            order: this.form.order,
            name: this.form.name,
            ...(this.form.label !== '' && { label: this.form.label }),
            icon: this.form.icon
          }

          this.editDefaultActivity(activity)
        } else if (this.mode === 'project') {
          const activity = {
            id: this.form.id,
            order: this.form.order,
            name: this.form.name,
            ...(this.form.label !== '' && { label: this.form.label }),
            icon: this.form.icon
          }

          this.editProjectActivity(this.project.id, activity)
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
      'editProjectActivity'
    ]),
    ...mapActions('settings', [
      'editDefaultActivity'
    ])
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    }
  }
}
</script>
