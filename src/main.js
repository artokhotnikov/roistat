// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import('./assets/css/main.css')

Vue.config.productionTip = false

Vue.directive('phone', {
  bind(el, { value }) {
    if (!value) return
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }

      const x = this.value
        .replace(/\D/g, '')
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      x[1] = '+7'
      this.value = !x[3]
        ? x[1] + ' (' + x[2]
        : x[1] +
          ' (' +
          x[2] +
          ') ' +
          x[3] +
          (x[4] ? '-' + x[4] : '') +
          (x[5] ? '-' + x[5] : '')
      el.dispatchEvent(new Event('input'))
    }
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
