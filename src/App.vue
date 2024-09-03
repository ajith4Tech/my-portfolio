<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">
          <h1>Ajith's Portfolio</h1>
        </div>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view></router-view> <!-- This is where the routed components will be rendered -->

    <footer>
      <p>&copy; 2024 Ajith's Portfolio</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import './assets/style.css';
</style>
