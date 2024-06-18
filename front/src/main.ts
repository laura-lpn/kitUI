
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

const app = createApp(App)

const store = createPinia()

app.use(store)
app.use(router)
app.component('my-input', MyInput)
app.component('my-button', MyButton)
app.component('my-select', MySelect)
app.component('my-range', MyRange)
app.component('my-color-picker', MyColorPicker)

app.mount('#app')
