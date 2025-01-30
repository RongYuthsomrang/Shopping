<template>
<center>
    <div class="container-fluid p-0 py-2 font-poppins">
        <div class="container p-0 mt-3">
            <SwiperHero/>
            <SmallCard/>
            <SectionShopnow/>
            <Category/>
            <Card/>

        </div>
    </div>
</center>
</template>

<script setup>
    import SwiperHero from '../components/SwiperHero.vue';
    import SmallCard from '../components/SmallCard.vue';
    import SectionShopnow from '../components/SectionShopnow.vue';
    import Category from '../components/Category.vue';
    import Card from '../components/Card.vue';
    import axios from 'axios';
    import { onMounted, provide } from 'vue';
    import { ref } from 'vue';

        const products = ref([])

        const  FetchAPI = async () => {
            try{
                const res = await axios.get('https://product-server-json.onrender.com/products');
                console.log(res.data);
                products.value = res.data;
            }catch(e){

            }
        }

        onMounted(()=>{
            FetchAPI();
        })          

        provide('products',products);
</script>

<style lang="scss" scoped>

</style>
