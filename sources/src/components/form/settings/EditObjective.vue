<template>
  <q-card>
    <h3>{{$t('settingspage.objective.title')}}</h3>
    <div class="q-pa-md">
      <div class="row">
        <div class="col q-pr-sm">
          <q-select
            v-model="form.type"
            :options="types"
            :label="$t('settingspage.objective.objectivetypelabel')"
            @blur="$v.form.type.$touch"
            :error="$v.form.type.$error"
          >
          </q-select>
        </div>
        <div class="col q-pl-sm">
          <q-input
            options-cover
            v-model="form.value"
            :label="$t('settingspage.objective.objectivevaluelabel')"
            @blur="$v.form.value.$touch"
            :error="$v.form.value.$error"
            type="number"
          />
        </div>
      </div>
    </div>
    <br />
    <center>
      <q-btn color="positive" @click="submit" :disable="JSON.stringify(form) === JSON.stringify(this.objective)">{{$t('buttons.save')}}</q-btn>
    </center>
    <br />
  </q-card>
</template>

<style>
</style>

<script>
import { required, between } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
import { ObjectiveType, ObjectiveTypeOptions } from '../../../data/objectives'

export default {
  name: 'EditObjectiveForm',
  data: function () {
    return {
      form: {
        type: ObjectiveType.DAILY,
        value: 0
      },
      types: ObjectiveTypeOptions
    }
  },
  validations: {
    form: {
      type: { required },
      value: { required, between: between(1, 500) }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const objective = {
          type: this.form.type,
          value: this.form.value
        }

        this.setObjective(objective)
        this.$q.notify({
          message: this.$t('settingspage.objective.success'),
          color: 'positive'
        })
      }
    },
    reset () {
      this.form = {
        type: ObjectiveType.DAILY,
        value: 0
      }
    },
    ...mapActions('settings', [
      'setObjective'
    ])
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    },
    ...mapState('settings', [
      'objective'
    ])
  },
  created: function () {
    this.form.type = this.objective.type
    this.form.value = this.objective.value
  }
}
</script>
