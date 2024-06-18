import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import MyInput from './components/fields/MyInput.vue'
import MyButton from './components/fields/MyButton.vue'
import MySelect from './components/fields/MySelect.vue'
import MyRange from './components/fields/MyRange.vue'
import MyColorPicker from './components/fields/MyColorPicker.vue'

const store = createPinia()

const app = createApp(App)
  .component('my-input', MyInput)
  .component('my-button', MyButton)
  .component('my-select', MySelect)
  .component('my-range', MyRange)
  .component('my-color-picker', MyColorPicker)

app.use(store)
app.use(router)

app.mount('#app')
