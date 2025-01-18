<script>
export default {
  name: 'VEmployeeTable',
  emits: ['handle-sort'],
}
</script>

<template>
  <div class="table">
    <div class="table-head">
      <div
        @click="$emit('handleSort', 'byName')"
        class="table-cell"
      >
        Имя
      </div>
      <div
        @click="$emit('handleSort', 'byPhone')"
        class="table-cell"
      >
        Телефон
      </div>
    </div>
    <div class="table-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.table {
  padding: 30px;
  border-radius: var(--rounded);
  background: var(--white);
}
.table-head {
  display: flex;
}
.table-cell {
  flex: 0 1 50%;
}
.table-body {
  margin: 20px 0 0;
}
</style>
