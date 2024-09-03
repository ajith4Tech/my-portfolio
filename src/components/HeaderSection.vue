<template>
  <header class="header">
    <NavBar />
  </header>
</template>

<script>
import NavBar from './NavbarSection.vue';

export default {
  name: 'Header',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.header {
  background-color: #90ADAE; /* Light teal background for header */
  padding: 1rem 1.5rem; /* Padding around the header */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header {
    padding: 0.75rem 1rem; /* Adjust padding for smaller screens */
  }
}
</style>
