<script>
import VButton from '../UI/VButton.vue'
import VInput from '../UI/VInput.vue'

export default {
  name: 'CreateEmployeeModal',
  components: { VInput, VButton },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    employees: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ['update:show', 'handle-submit'],
  data() {
    return {
      form: {
        name: '',
        phone: '',
        parent: '',
      },
      formErrors: {
        name: false,
        phone: false,
      },
    }
  },
  methods: {
    handleSubmit() {
      if (!this.validateForm()) return

      this.$emit('handle-submit', this.form)
      this.handleClose()
      this.form = {
        name: '',
        phone: '',
        parent: '',
      }
    },

    validateForm() {
      this.formErrors.name = this.form.name.trim().length < 1
      this.formErrors.phone = this.form.phone.length < 18

      return !Object.values(this.formErrors).includes(true)
    },

    handleClose() {
      this.$emit('update:show', false)
    },
  },
}
</script>

<template>
  <div
    @click="handleClose"
    class="modal"
  >
    <div
      @click.stop
      class="modal-content"
    >
      <div class="modal-title">Добавить пользователя</div>
      <form
        @submit.prevent="handleSubmit"
        class="form"
      >
        <v-input
          v-model="form.name"
          placeholder="Имя"
          :invalid="formErrors.name"
        />
        <v-input
          v-model="form.phone"
          placeholder="Телефон"
          :invalid="formErrors.phone"
          usePhoneMask
        />
        <select
          v-model="form.parent"
          class="select"
        >
          <option value="">Не указан</option>
          <option
            v-for="item in employees"
            :key="item.id"
            :value="item"
          >
            {{ item.name }}
          </option>
        </select>
        <v-button type="submit">Сохранить</v-button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--overlay);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 20px;
  border-radius: var(--rounded);
  background: var(--white);
  max-width: 450px;
  width: 100%;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.select {
  padding: 10px 20px;
  border: 1px solid var(--gray);
  background: var(--bg);
  border-radius: var(--rounded);
  color: var(--black);
}
</style>
