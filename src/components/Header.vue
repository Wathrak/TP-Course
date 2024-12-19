<template>
  <div class="header">
    <router-link to="/page/1">Page1</router-link>
    <router-link to="/page/2">Page2</router-link>
    <router-link to="/page/3">Page3</router-link>
  </div>
</template>
<script>
export default {}
</script>
<style>
.header {
  display: flex;
  gap: 10px;
  justify-content: end;
}
</style>
