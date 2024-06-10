
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import MyInput from './components/MyInput.vue'
import MyButton from './components/MyButton.vue'
import MySelect from './components/MySelect.vue'
import MyRange from './components/MyRange.vue'
import MyColorPicker from './components/MyColorPicker.vue'

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
