<template>
    <div class="h-[235px] bg-[#d6fae9] flex m-[50px] rounded-2xl">
        <img src="@/assets/images/cool-bg1.png" alt="pic" class="absolute">
        <img src="@/assets/images/cool-bg2.png" alt="pic" class="absolute left-[600px]">

        <div class="flex flex-col justify-center mx-12">
            <div class="text-[48px] font-semibold">Coke & Milk</div>
            <Navigatebar first="Home" second="Categories" third="Coke & Milk"/>
        </div>
    </div>

   
</template>
<script>
import Navigatebar from '@/components/SubComponents/Navigatebar.vue';

export default {
    components: { Navigatebar }
}
</script>
<style lang="">
    
</style>