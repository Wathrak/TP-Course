<template>
  <div class="flex flex-col">
    <router-link
      :to="`/page/${$route.params.pageNumber}`"
      class="border border-black py-2 pr-6 pl-10"
      >Menu</router-link
    >
    <router-link
      @click="$emit('passSectionNumber', num)"
      class="sectionLink border border-black py-2 px-6"
      :to="`/page/${$route.params.pageNumber}/section/${num}`"
      v-for="(num, index) in 4"
      :key="index"
    >
      section {{ num }}
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sectionLink.router-link-active {
  background-color: lightcoral;
}
</style>
