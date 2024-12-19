<template>
  <div class="flex justify-between p-4">
    <div>Header</div>
    <div class="flex gap-4 mx-4">
      <router-link
        v-for="(pageNumber, index) in 3"
        :key="index"
        :to="`/page/${pageNumber}`"
        class="pageLink"
      >
        Page {{ pageNumber }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.pageLink.router-link-active {
  color: red;
}
</style>
