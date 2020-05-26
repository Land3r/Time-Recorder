/**
 * Mixin to allow a component to implement a vuelidate validation on value data
 */

export default {
  props: {
    validations: {
      type: [Array, Object],
      required: false,
      default: () => ({})
    }
  },
  validations: function () {
    return {
      value: {
        value: this.validations
      }
    }
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    }
  }
}
