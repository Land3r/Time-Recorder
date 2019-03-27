<template>
  <q-card style="min-width: 30vw; max-width: 90vw;">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{$t('form.activity.create.title')}}</div>
    </q-card-section>

    <q-card-section>
      <q-input
        :label="$t('form.activity.create.namelabel')"
        v-model="form.name"
        @blur="$v.form.name.$touch"
        :error="$v.form.name.$error"
      />

      <q-input
        :label="$t('form.activity.create.labellabel')"
        v-model="form.label"
        @blur="$v.form.label.$touch"
        :error="$v.form.label.$error"
      />

      <q-select
        use-input
        input-debounce="0"
        :label="$t('form.activity.create.iconlabel')"
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
            <q-item-section class="text-grey">{{$t('common.noresults')}}</q-item-section>
          </q-item>
        </template>
      </q-select>

    </q-card-section>

    <q-card-actions class="bg-white" align="right">
      <q-btn flat :label="$t('buttons.cancel')" class="float-left" v-close-dialog />
      <q-btn flat :label="$t('buttons.save')" class="text-primary float-right" @click="submit()" :v-close-dialog="isValid"/>
    </q-card-actions>
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import { uid } from 'quasar'
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
        return { id: uid() }
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
            id: uid(),
            name: this.form.name,
            ...(this.form.label !== '' && { label: this.form.label }),
            icon: this.form.icon
          }

          this.addDefaultActivity(activity)
        } else if (this.mode === 'project') {
          const activity = {
            id: uid(),
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
    ])
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    }
  }
}
</script>
