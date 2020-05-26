<template>
  <q-input
    v-model="value"
    :label="$t(label)"
    :hint="hint"
    :readonly="readonly"
    mask="time"
    :rules="['time']"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy>
          <q-time
            v-model="value"
            :landscape="landscape"
          />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<style>
</style>

<script>
import onValueChanged from 'components/generics/mixins/onValueChanged'
import withValidations from 'components/generics/mixins/withValidations'

export default {
  name: 'i18nVueCalTime',
  mixins: [onValueChanged, withValidations],
  props: {
    model: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    landscape: {
      type: Boolean,
      required: false,
      default: false
    },
    hint: {
      type: String,
      required: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function () {
    return {
      value: this.fromVueCalTimeToStdTime(this.model)
    }
  },
  methods: {
    __extractValue: function (value) {
      return this.fromStdTimeToVueCalTime(value)
    },
    fromStdTimeToVueCalTime: function (value) {
      // Std time is HH:MM
      const values = value.split(':')
      const hours = Math.floor(values[0])
      const minutes = Math.floor(values[1])
      return (+hours) * 60 + (+minutes)
    },
    fromVueCalTimeToStdTime: function (value) {
      // VueCalTime is in minutes.
      const hours = Math.floor(value / 60)
      const minutes = Math.floor(value % 60)
      return `${hours.toLocaleString('fr-fr', { minimumIntegerDigits: 2 })}:${minutes.toLocaleString('fr-fr', { minimumIntegerDigits: 2 })}`
    },
    getValue: function () {
      return this.__extractValue(this.value)
    }
  },
  computed: {
  }
}
</script>
