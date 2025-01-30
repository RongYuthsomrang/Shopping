<template>
    <div class="container p-0">
        <div class="d-flex justify-content-start overflow-x-scroll">
            <div
            v-for="(e,i) in filterProduct"
            :key="i"
            class="col-12 col-md-4 col-lg-3 px-2 ps-lg-2 pe-lg-2 py-2"
            >
                <div class="card h-100 rounded-0 border-2 overflow-hidden">
                    <div class="w-100" style="height: 200px;">
                        <img :src="e.image" alt="" class="w-100 h-100 object-fit-contain">
                    </div>
                    <div class="card-body text-center pt-4">
                        <h5 class="m-0 text-1line">{{ e.name }}</h5>
                        <p class="m-0 text-2line">
                            {{ e.description }}
                        </p>
                        <div class="d-flex mt-4">
                                <div class="col-6 text-start">
                                <p class="m-0 text-danger dw-bold">${{ e.price }}</p></div>
                                <div class="col-6 text-end">
                                <p class="m-0">{{ e.rating }}rating</p></div>
                            </div>
                            <div class="border-top mt-3 text-center">
                                <button class="btn mt-3 btn-outline-danger">Heart</button>
                                <button class="btn mt-3 btn-outline-danger">Cart</button>
                                <button class="btn mt-3 btn-outline-danger">View</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { inject,computed } from 'vue';

const products = inject('products');

const filterProduct = computed(()=>products.value.slice(0,4))

</script>

<style scoped>
    .card:hover {
        cursor: pointer;
    }
    .text-2line {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
    }
    .text-1line {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
    }
</style>