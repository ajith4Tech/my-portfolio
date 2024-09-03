<template>
  <section id="contact" class="section-contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Your Name" required>
      <input type="email" v-model="email" placeholder="Your Email" required>
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.name}!`);
      // Add more complex form handling logic here
    }
  }
}
</script>

<style scoped>
.section-contact {
  background-color: #f4f4f4;
  padding: 60px 20px;
}

.section-contact h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
}

.section-contact form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.section-contact input,
.section-contact textarea {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.section-contact button {
  padding: 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.section-contact button:hover {
  background-color: #555;
}
</style>
