<script>
export default {
  name: 'VButton',
}
</script>

<template>
  <button @click="$emit('click', $event)" class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: var(--rounded);
  border: 1px solid transparent;
  cursor: pointer;
  background: var(--gray);
  color: var(--white);
  transition:
    color,
    background,
    var(--transition-time) linear;

  &:hover {
    background: var(--gray-light);
  }
  &:active {
    background: var(--gray-light);
  }
}
</style>
