<template>
    <div class="container p-0">
        <div class="d-flex justify-content-between mb-3 pb-3">
            <button class="btn w-100 border-0 rounded-0  shadow-none btn-hover btn-focus">Featured</button>
            <button class="btn w-100 border-0 rounded-0  shadow-none btn-hover btn-focus">On Sale</button>
            <button class="btn w-100 border-0 rounded-0  shadow-none btn-hover btn-focus">Top Rate</button>
            <button class="btn w-100 border-0 rounded-0  shadow-none btn-hover btn-focus">New Arrived</button>
        </div>
        <div class="px-2 pb-2">
            <select name="" id="" class="d-block d-lg-none form-select shadow-none border">
                <option value="">Featured</option>
                <option value="">On Sale</option>
                <option value="">Top Rate</option>
                <option value="">New Arrived</option>
            </select>
        </div>
    </div>
</template>

<script setup>
  
</script>

<style scoped>
    .btn-active:enabled{
        border-bottom: 2px solid black !important;
    }
    .btn-focus:focus{
        border-bottom: 2px solid black !important;
    }
    .btn-hover:hover{
        border-bottom: 2px solid black !important;
    }
</style>