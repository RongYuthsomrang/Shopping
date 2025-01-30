<template>
    <header>
        <Header />
    </header>
    <main>
    
        <RouterView />
    </main>
    <footer>
        <Footer />
    </footer>
    <BottomBar />
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import '../src/scss/color.scss'
    import Header from './components/Header.vue';
    import BottomBar from './components/BottomBar.vue';

    import Footer from './components/Footer.vue';
</script>


