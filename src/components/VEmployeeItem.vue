<script>
export default {
  name: 'VEmployeeItem',
  props: {
    employee: {
      type: Object,
      required: true,
      default: () => {},
    },
    deepLevel: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<template>
  <div class="employee">
    <div
      class="employee-item"
      :style="{ marginLeft: `${deepLevel * 20}px` }"
    >
      <span v-if="employee.name">
        {{ employee.name }}
      </span>
      <span v-if="employee.phone">{{ employee.phone }}</span>
    </div>
    <div
      v-if="employee.employees && employee.employees.length > 0"
      class="employee-child"
    >
      <v-employee-item
        v-for="(child, index) in employee.employees"
        :key="index"
        :employee="child"
        :deepLevel="deepLevel + 1"
      />
    </div>
  </div>
</template>

<style scoped>
.employee {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.employee-item {
  border: 1px solid var(--gray-light);
  display: flex;
}

.employee-item span {
  padding: 20px;
  display: block;
}

.employee-item span:first-child {
  flex: 1 1 auto;
  border-right: 2px solid var(--gray-light);
}
.employee-item span:last-child {
  flex: 0 1 370px;
}
</style>
