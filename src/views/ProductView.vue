<template>
    <div class="mx-[50px]">
        <Navigatebar first="Home" second="Vegetables & tubers" third="Seeds of Change Organic"/>
        <div class="flex gap-10">
            <div class="border">
                <div class="h-20"></div>
                <img src="@/assets/images/mango1.png" alt="">
            </div>

            <div class="flex flex-col gap-5">
                <div class="text-[35px] font-semibold">Seeds of Change Organic Quinoa, Brown</div>
                <p class="product-rating">
                    <i class="fa-solid fa-star" style="color: #FFDF00"></i>
                    <i class="fa-solid fa-star" style="color: #FFDF00"></i>
                    <i class="fa-solid fa-star" style="color: #FFDF00"></i>
                    <i class="fa-solid fa-star" style="color: #FFDF00"></i>
                    <i class="fas fa-star" style="color: #cbd5e1"></i>
                    (4.0)
                </p>
                <div class="flex gap-10 text-center items-end">
                    <div class="text-green text-5xl font-semibold">38$</div>
                    <div class="text-gray text-2xl font-semibold line-through">42$</div>
                </div>

                <div class="w-[500px] text-[#334155] ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, 
                    quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
                </div>

                <div class="flex">
                    <form action="" class="w-[188px]">
                        <input type="number" name="input" id="input" class="border-2 border-green rounded-md p-2 text-green">
                    </form>
                    <button class="text-white bg-green h-10 w-[150px] mx-10">
                        <i class="fa-solid fa-cart-shopping"></i> 
                        Add To Cart
                    </button>
                    <button class="border border-black py-2 px-4">
                        <i class="fa-regular fa-heart"></i>
                        
                    </button>
                    <button class="border border-black py-2 px-4">
                        <i class="fa-solid fa-shuffle"></i>
                        
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navigatebar from '@/components/SubComponents/Navigatebar.vue';


export default {
    components: { Navigatebar }
}
</script>
<style>
    
</style>