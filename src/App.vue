<template>
  <div class="main">
    <div class="category">
      <div v-if="categoriesLoading">Loading Categories...</div>
      <div v-else style="display: flex; gap: 10px;">
        <div style="display: inline-flex;" v-for="category in categories" :key="category">
          <Categories
            :title="category.name"
            :amount="category.productCount"
            :color="category.color"
            :image="category.image"
          />
        </div>
      </div>
    </div>

    <br><br><br><br>

    <div class="promotion">
      <div v-if="promotionsLoading">Loading Promotions...</div>
      <div v-else style="display: flex; gap: 10px;">
        <div v-for="promotion in promotions" :key="promotion">
          <Promotion
            :title="promotion.title"
            :buttonColor="promotion.buttonColor"
            :color="promotion.color"
            :imgURL="promotion.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Promotion from './components/Promotion.vue';
import Categories from './components/Categories.vue';

export default {
    name: 'App',
    components: { Categories, Promotion },
    
    data() {
        return {
          // categories: [
          //   {
          //     title: "Burger", 
          //     amount: "14",
          //     color: "#F2FCE4",
          //     image: "/src/assets/images/burger.png",
          //   },
          //   {
          //     title: "Peach", 
          //     amount: "17",
          //     color: "#FFFCEB",
          //     image: "/src/assets/images/peach.png",
          //   },
          //   {
          //     title: "Organic Kiwi", 
          //     amount: "21",
          //     color: "#ECFFEC",
          //     image: "/src/assets/images/kiwi.png",
          //   },
          //   {
          //     title: "Red Apple", 
          //     amount: "68",
          //     color: "#FEEFEA",
          //     image: "/src/assets/images/apple.png",
          //   },
          //   {
          //     title: "Snack", 
          //     amount: "21",
          //     color: "#ECFFEC",
          //     image: "/src/assets/images/snack.png",
          //   },
          //   {
          //     title: "Black Plum", 
          //     amount: "25",
          //     color: "#FFF3FF",
          //     image: "/src/assets/images/blueberry.png",
          //   },
          //   {
          //     title: "Vegetables", 
          //     amount: "65",
          //     color: "#F2FCE4",
          //     image: "/src/assets/images/cabbage.png",
          //   },
          //   {
          //     title: "Headphones", 
          //     amount: "33",
          //     color: "#FFFCEB",
          //     image: "/src/assets/images/headphone.png",
          //   },
          //   {
          //     title: "Cake & Milk", 
          //     amount: "54",
          //     color: "#F2FCE4",
          //     image: "/src/assets/images/snack2.png",
          //   },
          //   {
          //     title: "Orange", 
          //     amount: "63",
          //     color: "#FFF3FF",
          //     image: "/src/assets/images/orange.png",
          //   }
          // ],
          // promotions: [
          //   {
          //     title: "Everyday Fresh & Clean with Our Products",
          //     buttonColor: "#3BB77E",
          //     imgURL: "/src/assets/images/onion.png",
          //     color: "#F0E8D5",
          //   },
          //   {
          //     title: "Make your Breakfast Healthy and Easy",
          //     buttonColor: "#b73b8c",
          //     imgURL: "/src/assets/images/strawberry-juice.png",
          //     color: "#F3E8E8",
          //   },
          //   {
          //     title: "The best Organic Products Online",
          //     buttonColor: "#FDC040",
          //     imgURL: "/src/assets/images/vegetable-basket.png",
          //     color: "#E7EAF3",
          //   },
          // ],
          categories: [],
          promotions: [],
          categoriesLoading: true,
          promotionsLoading: true,
        }
    },
    
    methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        this.categoriesLoading = false;
      }
    },

    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error('Error fetching promotions:', error);
      } finally {
        this.promotionsLoading = false;
      }
    },
  },

  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  },
};
</script>

<style>
  .main {
    display: block;
  }

  .category {
    display: flex;
  }

  .promotion {
    display: flex;
    gap: 25px;
  }

</style>
