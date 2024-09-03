<template>
  <nav class="navbar">
    <div class="logo">
      <h1>Ajith's Portfolio</h1>
    </div>
    <ul :class="['nav-list', { open: isOpen }]">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <div class="hamburger" @click="toggleMenu">
      &#9776;
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarSection',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #323232; /* Dark gray background */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Specify the height of the navbar */
  z-index: 1000;
  transition: background-color 0.3s ease;
  box-sizing: border-box; /* Ensure padding is included in height */
}

.navbar .logo h1 {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin: 0;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}

.hamburger {
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #323232;
    width: 100%;
    padding: 1rem 0;
  }

  .nav-list.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
</style>
