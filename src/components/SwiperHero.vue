<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="col-12 rounded-3 overflow-hidden">
      <div style="height: 70vh">
      <div class="position-absolute z-3 text-light top-50 start-50 translate-middle text-center">
      <h1 class="text-uppercase">The biggest sale</h1>
      <p class="fs-50">Specail for today</p>
      <button class="btn bg-Violet-700 text-light px-4 fs-6 py-2 text-uppercase btn-dance">Shop now</button>
      </div>
      <img style="filter: brightness(50%)" src="https://www.nvidia.com/content/dam/en-zz/Solutions/ces-2023/40-series-laptops/geforce-rtx-40-series-laptop-og.jpg" alt="" class="w-100 h-100 object-fit-cover">
      </div>
      </swiper-slide>
      <swiper-slide class="col-12 rounded-3 overflow-hidden">
      <div style="height: 70vh">
      <div class="position-absolute z-3 text-light top-50 start-50 translate-middle text-center">
      <h1 class="text-uppercase">The Camera 50% off</h1>
      <p class="fs-50">Specail for today</p>
      <button class="btn bg-Violet-700 text-light px-4 fs-6 py-2 text-uppercase">Shop now</button>
      </div>
      <img style="filter: brightness(50%)" src="https://cdn.mos.cms.futurecdn.net/4wpKrH93D37dDPTisdqGy4.jpg" alt="" class="w-100 h-100 object-fit-cover">
      </div>
      </swiper-slide>
      <swiper-slide class="col-12 rounded-3 overflow-hidden">
      <div style="height: 70vh">
      <div class="position-absolute z-3 text-light top-50 start-50 translate-middle text-center">
      <h1 class="text-uppercase">The Sport Shop</h1>
      <p class="fs-50">Black friday</p>
      <button class="btn bg-Violet-700 text-light px-4 fs-6 py-2 text-uppercase">Shop now</button>
      </div>
      <img style="filter: brightness(50%)" src="https://static.vecteezy.com/system/resources/thumbnails/028/124/014/small_2x/close-up-view-of-glowing-basketball-ball-on-wet-floor-and-3d-court-generative-ai-photo.jpg" alt="" class="w-100 h-100 object-fit-cover">
      </div>
      </swiper-slide>
      
    </swiper>
 </template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
  const modules = [Autoplay, Pagination, Navigation];
</script>
  