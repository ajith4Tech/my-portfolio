import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeSection.vue';
import About from './components/AboutSection.vue';
import Projects from './components/ProjectSection.vue';
import Contact from './components/ContactSection.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
