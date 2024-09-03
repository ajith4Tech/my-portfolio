<!-- src/App.vue -->
<template>
  <div id="app">
    <Header/>

    <router-view></router-view> <!-- Render routed components here -->

    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderSection.vue';
import Footer from './components/FooterSection.vue';  // Import NavBar component

export default {
  name: 'App',
  components: {
    Header, 
    Footer 
  },
};
</script>

<style>
@import './assets/style.css';
</style>
