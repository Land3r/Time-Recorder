/**
 * Mixin to allow a component to report value changed to another component.
 * Note that to use this mixin, you have to implement the method __extractValue(value) in order to extract to desired value from the component's value.
 */

export default {
  props: {
    onValueChanged: {
      type: Function,
      required: false
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      if (this.props?.onValueChanged) {
        let value = this.__extractValue(newValue)
        this.props.onValueChanged(value)
      }
    }
  }
}
