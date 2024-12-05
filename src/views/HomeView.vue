<template>
  <router-view>
    <div class="main">
      <Searchbar/>
      <Menu @categorySelected="filterByCategory" title="Featured Categories"/>
  
      <br>
      <div class="category">
        <div v-if="categoriesLoading">Loading Categories...</div>
        <div v-else style="display: flex; gap: 10px; overflow: hidden ">
          <div style="display: inline-flex;" v-for="category in Categories" :key="category">
            <Categories
              :title="category.name"
              :amount="category.productCount"
              :color="category.color"
              :image="category.image"
            />
          </div>
        </div>
      </div>
  
      <br><br><br>
      <div class="promotion">
        <div v-if="promotionsLoading">Loading Promotions...</div>
        <div v-else style="display: flex; gap: 10px;">
          <div v-for="promotion in Promotions" :key="promotion">
            <Promotion
              :title="promotion.title"
              :buttonColor="promotion.buttonColor"
              :color="promotion.color"
              :imgURL="promotion.image"
            />
          </div>
        </div>
      </div>
  
      <br><br>
      <Menu @categorySelected="filterByCategory" title="Popular Products"/>
      <Product/>
  
    </div>
  </router-view>
</template>
  
  <script>

  import Promotion from '../components/Promotion.vue';
  import Categories from '../components/Categories.vue';
  import { useProductStore } from '../stores/product';
  import { mapState } from 'pinia';
  import Menu from '../components/Menu.vue';
  import Product from '../components/Product.vue';
  import Searchbar from '../components/Searchbar.vue';
  
  export default {
      name: 'App',
      components: { Categories, Promotion, Menu, Product, Searchbar },
      setup() {
        const store = useProductStore();
        return {
          store,
        }
      },
      data() {
          return {
            currentGroupName: 'Fruits',
            currentCategoryId: 5,
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
            // categories: [],
            // promotions: [],
            categoriesLoading: true,
            promotionsLoading: true,
          }
      },
      
      methods: {
  
    },
  
    computed: {
        ...mapState(useProductStore, {
          Categories: "categories",
          Promotions: "promotions",
          Products: "products",
          Groups: "groups",
  
          categoriesByGroup(store) {
            const filteredCategories = store.getCategoriesByGroup(this.currentGroupName)
            console.log("Categories byGroupName: ", filteredCategories)
            return filteredCategories;
          },
  
          productsByGroup(store) {
            const filteredProducts = store.getProductsByGroup(this.currentGroupName)
            console.log("Products byGroupName: ", filteredProducts)
            return filteredProducts;
          },
          
          productsByCategory(store) {
            const filteredProducts = store.getProductsByCategory(this.currentCategoryId)
            console.log("Products byCategoryId: ", filteredProducts)
            return filteredProducts;
          },
  
          popularProducts(store) {
            // const popularProducts = store.products.filter((product) => product.countSold > 10)
            const popularProducts = store.getPopularProducts
            console.log("Popular Products: ", popularProducts)
            return popularProducts;
          },
          
        }),
        
    },
  
    async mounted()  {
      await this.store.fetchCategories().then(() => {
        this.categoriesLoading = false;
      })
      await this.store.fetchPromotions().then(() => {
        this.promotionsLoading = false;
      })
      await this.store.fetchProducts().then(() => {
        this.productsLoading = false;
      })
      await this.store.fetchGroups().then(() => {
        this.groupsLoading = false;
      })
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
  