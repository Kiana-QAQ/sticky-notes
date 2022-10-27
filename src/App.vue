<script>
import Title from './components/title/index.vue'
export default {
  components: {
    Title
  },
  mounted () {
    document.body.className = `theme-notes-white`
  }
}
</script>

<template>
  <Title />
  <router-view />
</template>

<style scoped>
</style>