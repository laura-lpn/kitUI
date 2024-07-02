<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<template>
  <MyHeader />
  <main>
    <RouterView />
  </main>
  <MyFooter />
</template>