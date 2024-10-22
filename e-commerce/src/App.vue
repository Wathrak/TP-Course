<template>
  <div class="main">
    <Categories title="Burger" amount="14" color="#F2FCE4" image="/src/assets/images/burger.png"/>
    <Categories title="Peach" amount="17" color="#FFFCEB" image="/src/assets/images/peach.png"/>
    <Categories title="Organic Kiwi" amount="21" color="#ECFFEC" image="/src/assets/images/kiwi.png"/>
    <Categories title="Red Apple" amount="68" color="#FEEFEA" image="/src/assets/images/apple.png"/>
    <Categories title="Snack" amount="34" color="#FFF3EB" image="/src/assets/images/snack.png"/>
    <Categories title="Black Plum" amount="25" color="#FFF3FF" image="/src/assets/images/blueberry.png"/>
    <Categories title="Vegetables" amount="65" color="#F2FCE4" image="/src/assets/images/cabbage.png"/>
    <Categories title="Headphones" amount="33" color="#FFFCEB" image="/src/assets/images/headphone.png"/>
    <Categories title="Cake & Milk" amount="54" color="#F2FCE4" image="/src/assets/images/snack2.png"/>
    <Categories title="Orange" amount="63" color="#FFF3FF" image="/src/assets/images/orange.png"/>
  </div>
</template>

<script>
import Categories from './components/Categories.vue';

export default {
    name: 'App',
    components: { Categories },
    
    data() {
        return {
          url: '@/assets/burger.png',
        }
    }
}
</script>

<style>
  .main {
    display: flex;
    gap: 10px;
  }
</style>
