<script>
import VButton from './components/UI/VButton.vue'
import VEmployeeTable from './components/VEmployeeTable.vue'
import VEmployeeItem from './components/VEmployeeItem.vue'
import CreateEmployeeModal from './components/CreateEmployeeModal/App.vue'

export default {
  name: 'App',
  components: {
    CreateEmployeeModal,
    VEmployeeItem,
    VEmployeeTable,
    VButton,
  },
  data() {
    return {
      LS_KEY: 'RSEmployee',
      isShowModal: false,
      employees: [],
    }
  },
  methods: {
    handleClick() {
      this.isShowModal = true
    },

    employeeCreate({ name, phone, parent }) {
      const newEmployee = {
        name,
        phone,
        employees: [],
        id: String(Date.now()),
      }

      if (parent) {
        parent.employees.push(newEmployee)
      } else {
        this.employees.push(newEmployee)
      }
    },
  },

  computed: {
    employeesFlat() {
      const recursiveFlat = (items) =>
        items.reduce((acc, item) => {
          acc.push(item)
          if (item.employees && item.employees.length) {
            acc.push(...recursiveFlat(item.employees))
          }
          return acc
        }, [])

      return recursiveFlat(this.employees)
    },
  },

  watch: {
    employees: {
      deep: true,
      handler(val) {
        localStorage.setItem(this.LS_KEY, JSON.stringify(val))
      },
    },
  },

  created() {
    const lsData = JSON.parse(localStorage.getItem(this.LS_KEY))
    if (lsData.length > 0) {
      this.employees = lsData
    }
  },
}
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <div class="guests">
      <div class="guests-actions">
        <v-button @click="handleClick">Добавить</v-button>
      </div>

      <div class="guests-table">
        <v-employee-table>
          <v-employee-item
            v-for="employee in employees"
            :key="employee.id"
            :employee="employee"
          />
        </v-employee-table>
      </div>
    </div>
    <transition name="fade">
      <create-employee-modal
        v-if="isShowModal"
        :show.sync="isShowModal"
        :employees="employeesFlat"
        @handle-submit="employeeCreate"
      />
    </transition>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
}

.guests {
  max-width: 800px;
  width: 100%;
}

.guests-actions {
  display: flex;
  justify-content: flex-end;
}

.guests-table {
  margin: 32px 0 0;
}
</style>
