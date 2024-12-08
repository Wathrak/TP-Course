<template>
  <AppHeader />
  <router-view />
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import HomeView from './views/HomeView.vue'

export default {
  components: { AppHeader, HomeView },
}
</script>
<style></style>
