<template>
  <div class="main">
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
</template>
  
  <script>

  import Promotion from '../src/components/Promotion.vue';
  import Categories from '../src/components/Categories.vue';
  import { useProductStore } from '../src/stores/product';
  import { mapState } from 'pinia';
  import Menu from '../src/components/Menu.vue';
  import Product from '../src/components/Product.vue';
  import Searchbar from '../src/components/Searchbar.vue';
  
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
  