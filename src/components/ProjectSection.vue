<template>
  <section id="projects" class="section-projects">
    <h2>Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <h3>Project 1</h3>
        <p>A brief description of the project.</p>
      </div>
      <div class="project-card">
        <h3>Project 2</h3>
        <p>A brief description of the project.</p>
      </div>
      <div class="project-card">
        <h3>Project 3</h3>
        <p>A brief description of the project.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection'
}
</script>

<style scoped>
.section-projects {
  background-color: #fff;
  padding: 60px 20px;
}

.section-projects h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
}

.project-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.project-card {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  width: calc(33% - 40px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.project-card p {
  font-size: 16px;
  color: #666;
}
</style>
