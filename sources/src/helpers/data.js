export function getValue (options, value) {
  if (Array.isArray(value)) {
    return options.filter(option => value.indexOf(option.value) !== -1)
  } else {
    return options.filter(option => option.value === value)[0]
  }
}
