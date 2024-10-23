<template>
  <div class="main">
    <div class="label">
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
    <br><br><br><br>

    <div class="banner">
      <Banner title="Everyday Fresh & Clean with Our Products" color="#F0E8D5" imgURL="/src/assets/images/onion.png"/>
      <Banner title="Everyday Fresh & Clean with Our Products" color="#F3E8E8" imgURL="/src/assets/images/strawberry-juice.png"/>
      <Banner title="Everyday Fresh & Clean with Our Products" color="#E7EAF3" imgURL="/src/assets/images/vegetable-basket.png"/>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Categories from './components/Categories.vue';

export default {
    name: 'App',
    components: { Categories, Banner },
    
    data() {
        return {
          url: '@/assets/burger.png',
        }
    }
}
</script>

<style>
  .main {
    display: block;
  }
  .label {
    display: flex;
    gap: 25px;
  }
  .banner {
    display: flex;
    gap: 25px;
  }
</style>
