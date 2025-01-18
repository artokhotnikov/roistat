<script>
export default {
  name: 'VInput',

  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    usePhoneMask: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['input'],

  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<template>
  <input
    v-phone="usePhoneMask"
    :value="value"
    @input="handleInput"
    :placeholder="placeholder"
    :class="['input', { invalid: invalid }]"
    type="text"
  />
</template>

<style scoped>
.input {
  padding: 10px 20px;
  border: 1px solid var(--gray);
  background: var(--bg);
  border-radius: var(--rounded);
  color: var(--black);
}
.input.invalid {
  border-color: var(--red);
  color: var(--red);
}
</style>
