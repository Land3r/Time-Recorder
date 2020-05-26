<template>
  <q-select
    v-model="value"
    :options="options"
    :label="label"
    :hint="hint"
    :multiple="multiple"
    :readonly="readonly"
    @blur="$v.value.$touch"
    :error="$v.value.$error"
  >
    <!-- Translation of selected value. -->
    <template v-slot:selected-item="scope">
      <!-- If multiple and multiple value selected, then show a coma separator -->
      <template v-if="multiple && value.length > 1">
        <template v-if="value.indexOf(scope.opt) === value.length - 1">
          {{$t(scope.opt.label)}}
        </template>
        <template v-else>
          {{$t(scope.opt.label)}},
        </template>
      </template>
      <template v-else>
        {{$t(scope.opt.label)}}
      </template>
    </template>

    <!-- Show image or icon of selected value -->
    <template v-if="withImage" v-slot:prepend>
      <img height="60%" :src="value.icon" />
    </template>
    <template v-if="withIcon" v-slot:prepend>
      <q-icon :name="value.icon" />
    </template>

    <template v-slot:option="scope">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <!-- Show image or icon of available value -->
        <q-item-section v-if="withImage" avatar>
          <q-img :src="scope.opt.icon" />
        </q-item-section>
        <q-item-section v-if="withIcon" avatar>
          <q-icon :name="scope.opt.icon" />
        </q-item-section>

        <!-- Translation of available values -->
        <q-item-section>
          <q-item-label>
            {{$t(scope.opt.label)}}
          </q-item-label>
        </q-item-section>

      </q-item>
    </template>
  </q-select>
</template>

<style>
</style>

<script>
import onValueChanged from 'components/generics/mixins/onValueChanged'
import withValidations from 'components/generics/mixins/withValidations'

export default {
  name: 'i18nSelect',
  mixins: [onValueChanged, withValidations],
  props: {
    model: {
      type: [Object, Array, String],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    hint: {
      type: String,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    withIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    withImage: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function () {
    return {
      value: this.model
    }
  },
  methods: {
    __extractValue: function (value) {
      if (Array.isArray(value)) {
        return value.map(element => element.value)
      } else {
        return value.value
      }
    },
    getValue: function () {
      return this.__extractValue(this.value)
    }
  }
}
</script>
