<template>
  <div class="home">
    <h1>Welcome to My Portfolio</h1>
    <p>This is the home page of my personal portfolio website.</p>
    <router-link to="/projects" class="btn">View My Projects</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
}

.home h1 {
  font-size: 2.5rem;
  font-style: bold;
  color: #ffffff; /* Dark Blue for the heading */
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif; /* Updated font for heading */
}

.home p {
  font-size: 1.2rem;
  font-style: bold;
  color: #fefefe; /* Teal for the paragraph text */
  margin-bottom: 30px;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif; /* Updated font for paragraph text */
}

.btn {
  padding: 12px 25px;
  background-color: #3D52A0; /* Light Orange for button */
  color: #fff; /* White text color */
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.btn:hover {
  background-color: #EDE8E5; /* Darker Orange for button hover */
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .home h1 {
    font-size: 2rem;
  }

  .home p {
    font-size: 1rem;
  }

  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .home h1 {
    font-size: 1.5rem;
  }

  .home p {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  .btn {
    padding: 8px 15px;
    font-size: 0.8rem;
  }
}
</style>
