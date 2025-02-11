<template>
    <div>
        <nav class="navbar container-fluid bg-Violet-700 font-poppin py-3">
            <div class="container">
                <div class="col-2">
                    <h1 class="m-0 text-light fw-bold">RYS</h1>
                </div>
                <div class="col-8 col-lg-7 px-lg-5">
                    <form action="" class="d-flex rounded-5 overflow-hidden bg-body px-2">
                        <select name="" id="" class="form-select w-25 rounded-0 shadow-none border-0 border-end d-none d-lg-block">
                            <option value="">All Categories</option>
                            <option value="">Phone</option>
                            <option value="">Laptop</option>
                        </select>
                        <input type="text" class="form-control shadow-none border-0 rounded-0" placeholder="Type to search...">
                        <button class="btn border-0"><i class="bi bi-search"></i></button>
                    </form>
                </div>
                <div class="col-3 d-none d-lg-flex justify-content-end">
                    <a href=""class="me-3 text-decoration-none d-flex align-items-center font-poppins text-light position-relative">
                        <i class="bi bi-cart-plus-fill fs-3 "></i>
                        <span style="top: 5px" class="position-absolute start-100 translate-middle badge rounded-pill bg-light text-danger">
                            0
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </a>
                    <div v-if="isLogin" class="d-flex ms-2">
                        <RouterLink to="/profile">
                            <div style="width: 40px;height: 40px;" class="rounded-circle bg-black overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq_GdHrAfGdnr3cLDeagSc7X_twjR_6Cz9Q&s" alt="" class="w-100 h-100 object-fit-cover">
                            </div>
                        </RouterLink>
                    </div>
                    <div v-else class="d-flex ms-2">
                        <button class="btn text-light border rounded-0">Login</button>
                        <button class="btn text-dark bg-light rounded-0">Register</button>
                    </div>           
                </div>
            </div>
        </nav>
        <div class="d-none d-lg-flex justify-content-center container-fluid text-center shadow py-2">
            <RouterLink to="/" class="m-0 nav-link px-2 text-uppercase">Home</RouterLink>
            <RouterLink to="/product" class="m-0 nav-link px-2 text-uppercase">All-Product</RouterLink>
            <RouterLink to="/about" class="m-0 nav-link px-2 text-uppercase">About</RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const isLogin = ref(true)


</script>
