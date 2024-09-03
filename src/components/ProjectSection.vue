<template>
  <section class="section-projects">
    <h2>Projects</h2>
    <div class="project-slider">
      <div class="project-card">
        <img src="path/to/your/image.jpg" alt="Activity Tracking System" class="project-image" />
        <h3>Activity Tracking System</h3>
        <ul>
          <li><strong>Task Management:</strong> Create, assign, and prioritize tasks.</li>
          <li><strong>Real-Time Tracking:</strong> Monitor the progress of activities.</li>
          <li><strong>Reporting and Analytics:</strong> Generate detailed reports.</li>
          <li><strong>Collaboration Tools:</strong> Enhance teamwork with features.</li>
        </ul>
      </div>
      <div class="project-card">
        <img src="path/to/your/image.jpg" alt="Donor Management System" class="project-image" />
        <h3>Donor Management System</h3>
        <ul>
          <li><strong>Donor Profiles:</strong> Maintain detailed records.</li>
          <li><strong>Donation Tracking:</strong> Monitor and record all donations.</li>
          <li><strong>JWT Authorization:</strong> Implement secure JWT authorization.</li>
          <li><strong>Communication Tools:</strong> Automate and personalize communication.</li>
          <li><strong>Reporting and Analytics:</strong> Generate reports on donor engagement.</li>
        </ul>
      </div>
      <div class="project-card">
        <img :src="require('@/assets/cupa.png')" alt="Animal Care Tracker" class="project-image" />
        <h3>Animal Care Tracker</h3>
        <ul>
          <li><strong>Animal Profiles:</strong> Maintain detailed records.</li>
          <li><strong>Health Monitoring:</strong> Track medical treatments.</li>
          <li><strong>Care Scheduling:</strong> Plan and manage care routines.</li>
          <li><strong>Geo-Location Tracking:</strong> Utilize a reverse API for tracking.</li>
          <li><strong>Reporting and Compliance:</strong> Generate compliance reports.</li>
        </ul>
      </div>
      <div class="project-card">
    <img src="/assets/brain-ct-image-registration.jpg" alt="Brain CT Image Registration" class="project-image" />
    <h3>Brain CT Image Registration</h3>
    <ul>
          <li><strong>Intensity-Based:</strong> Align CT images based on voxel intensities, optimizing for high accuracy in image alignment.</li>
          <li><strong>Feature-Based:</strong> Detect and match key features across images to improve registration, especially in cases with varying intensities.</li>
      <li><strong>Deep Learning Model:</strong> Implement ResNet-50 for advanced feature extraction and alignment, enhancing the accuracy and robustness of the registration process.</li>
      <li><strong>Image Registration Libraries:</strong> Use SimpleITK and OpenCV for efficient and effective image registration, leveraging their powerful algorithms for alignment and transformation.</li>
      <li><strong>Automated Processing:</strong> Streamline image registration workflows with automated processing, reducing manual intervention and improving overall efficiency.</li>
      <li><strong>Quality Control:</strong> Incorporate quality control measures to ensure the accuracy and reliability of the registered images, supporting high-quality medical analysis.</li>
    </ul>
  </div>
      <!-- Add more project cards as needed -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
};
</script>

<style scoped>
.section-projects {
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
}

.section-projects h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
}

.project-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  padding-bottom: 20px;
}

.project-slider::-webkit-scrollbar {
  display: none; /* Hide the scrollbar */
}

.project-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  min-width: 300px; /* Minimum width of each card */
  max-width: 300px; /* Maximum width of each card */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-card h3 {
  font-size: 1.5rem;
  color: #2a9d8f;
  margin-bottom: 15px;
  text-align: left;
}

.project-card ul {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  text-align: left;
}

.project-card ul li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #264653;
  display: flex;
  align-items: flex-start;
}

.project-card ul li strong {
  color: #e76f51;
  margin-right: 5px;
}

.project-card ul li:before {
  content: '•';
  color: #e76f51;
  margin-right: 10px;
  font-weight: bold;
}
</style>
