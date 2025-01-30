<template>
        <div class="row m-0 py-2">
            <div v-for="i in textarr" class="col-12 col-md-6 col-lg-3 py-3 bg-Violet-700" :key="i">
                <div class="d-flex align-items-center justify-content-center px-4 text-light">
                    <i :class="i.iconName" class="fs-1 me-3"></i>
                    <div>
                        <h5 class="m-0">{{ i.h4txt }}</h5>
                        <p class="m-0" style="font-size: 14px;">{{ i.ptxt }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import { ref } from 'vue';

    const textarr = ref([
    {
        iconName: "bi bi-box2-heart-fill",
        h4txt: "Bonus plus",
        ptxt: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        iconName: "bi bi-car-front-fill",
        h4txt: "Free Shipping",
        ptxt: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        iconName: "bi bi-currency-dollar",
        h4txt: "Specail Price",
        ptxt: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        iconName: "bi bi-alarm-fill",
        h4txt: "Online 24H / 7",
        ptxt: "Lorem ipsum dolor sit amet consectetur."
    },
    ]);
</script>