<template>
  <Header />
  <div class="default flex">
    <Section class="" />
    <div class="page">Welcome to Page {{ this.$route.params.pageNumber }}</div>
  </div>
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue'
import Section from './Section.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Section, Footer },
}
</script>
<style>
.default {
  display: flex;
}

.page {
  display: flex;
  height: 90vh;
  width: 90vw;
  /* background-color: rebeccapurple; */
  align-items: center;
  font-size: xx-large;
  justify-content: center;
  justify-self: center;
  align-self: center;
}
</style>
