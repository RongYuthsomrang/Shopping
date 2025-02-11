<template>
    <div class="d-block d-lg-none container-fluid bg-Violet-700 fixed-bottom font-poppins">
        <ul class="d-flex justify-content-between nav">
        <li>
            <RouterLink to="/" class="d-grid align-items-center text-light text-decoration-none py-2">
            <i class="bi bi-house-door-fill text-center fs-4"></i>
            <p class="m-0">Home</p>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/Product" class="d-grid align-items-center text-light text-decoration-none py-2">
            <i class="bi bi-basket3-fill text-center fs-4"></i>
            <p class="m-0">Product</p>
            </RouterLink>
        </li>
        <li>
            
            <RouterLink to="/About" class="d-grid align-items-center text-light text-decoration-none py-2">
            <i class="bi bi-microsoft text-center fs-4"></i>
            <p class="m-0">About</p>
            </RouterLink>
        </li>
        <li>
            <a href="" class="d-grid align-items-center text-light text-decoration-none py-2">
            <i class="bi bi-cart-plus-fill text-center fs-4"></i>
            <p class="m-0">Cart</p>
            </a>
        </li>
        <li>
            <RouterLink to="/Profile" class="d-grid align-items-center text-light text-decoration-none py-2">
            <i class="bi bi-person-circle text-center fs-4"></i>
            <p class="m-0">Profile</p>
            </RouterLink>
        </li>
        </ul>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
