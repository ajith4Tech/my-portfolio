<template>
  <section class="section-projects">
    <h2>Projects</h2>
    <div class="project-slider">
      <div class="project-card">
        <img :src="require('@/assets/activity.jpeg')" alt="Activity Tracking System" class="project-image" />
        <h3>Activity Tracking System</h3>
        <ul>
          <li><strong>Task Management:</strong> Assign and prioritize tasks.</li>
          <li><strong>Real-Time Tracking:</strong> Monitor activity progress.</li>
          <li><strong>Reporting:</strong> Generate detailed reports.</li>
          <li><strong>Collaboration:</strong> Enhance teamwork features.</li>
        </ul>
      </div>
      <div class="project-card">
        <img :src="require('@/assets/Dms.png')" alt="Donor Management System" class="project-image" />
        <h3>Donor Management System</h3>
        <ul>
          <li><strong>Donor Profiles:</strong> Manage records.</li>
          <li><strong>Donation Tracking:</strong> Record all donations.</li>
          <li><strong>JWT Authorization:</strong> Secure access.</li>
          <li><strong>Communication:</strong> Automate personalized messages.</li>
          <li><strong>Reporting:</strong> Analyze donor engagement.</li>
        </ul>
      </div>
      <div class="project-card">
        <img :src="require('@/assets/cupa.png')" alt="Animal Care Tracker" class="project-image" />
        <h3>Animal Care Tracker</h3>
        <ul>
          <li><strong>Animal Profiles:</strong> Detailed records.</li>
          <li><strong>Health Monitoring:</strong> Track treatments.</li>
          <li><strong>Care Scheduling:</strong> Manage routines.</li>
          <li><strong>Geo-Tracking:</strong> Reverse API tracking.</li>
          <li><strong>Compliance:</strong> Generate reports.</li>
        </ul>
      </div>
      <div class="project-card">
        <img :src="require('@/assets/BrainCT.png')" alt="Brain CT Image Registration" class="project-image" />
        <h3>Brain CT Image Registration</h3>
        <ul>
          <li><strong>Intensity-Based:</strong> Align based on voxel intensity.</li>
          <li><strong>Feature-Based:</strong> Match key features.</li>
          <li><strong>Deep Learning:</strong> Implement ResNet-50.</li>
          <li><strong>Libraries:</strong> Use SimpleITK and OpenCV.</li>
          <li><strong>Automation:</strong> Streamline workflows.</li>
          <li><strong>Quality Control:</strong> Ensure accuracy.</li>
        </ul>
      </div>
      <div class="project-card">
        <img :src="require('@/assets/hms.png')" alt="Hospital Database Management System" class="project-image" />
        <h3>Hospital Database Management System</h3>
        <ul>
          <li><strong>Appointment Booking:</strong> Simplify scheduling.</li>
          <li><strong>Department Selection:</strong> Choose the right specialist.</li>
          <li><strong>Records Management:</strong> Organize patient data.</li>
          <li><strong>Doctor Availability:</strong> Real-time updates.</li>
          <li><strong>Secure Data:</strong> Protect sensitive information.</li>
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
