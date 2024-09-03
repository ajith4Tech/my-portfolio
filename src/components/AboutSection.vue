<template>
  <div class="about-section">
    <div class="intro">
      <h2>About Me</h2>
      <p>
        Hi, I'm Ajith, a passionate software developer with a strong background in Python and JavaScript. I love building innovative solutions that solve real-world problems.
      </p>
    </div>

    <div class="grid">
      <div class="education">
        <h3>Education</h3>
        <div class="education-item">
          <h4>B.E. Computer Science and Engineering (2023)</h4>
          <p><strong>College:</strong> Jyothy Institute Of Technology</p>
          <p><strong>CGPA:</strong> 8.5</p>
        </div>

        <div class="education-item">
          <h4>Pre-University Course (2019)</h4>
          <p><strong>College:</strong> Mahesh P U College</p>
          <p><strong>Percentage:</strong> 83%</p>
        </div>

        <div class="education-item">
          <h4>Secondary School Examination (S.S.C.) (2017)</h4>
          <p><strong>School:</strong> Good Shepherd School</p>
          <p><strong>Percentage:</strong> 87%</p>
        </div>
      </div>

      <div class="experience">
        <h3>Experience</h3>
        <div class="experience-item">
        <div class="experience-item">
          <h4>Software Development Engineer</h4>
          <p><strong>Company:</strong> Tech4Good Community</p>
          <p><strong>Duration:</strong> September 2023 - Present</p>
          <p><strong>Responsibilities:</strong> 
            <ul>
              <li>Understand and Analyze Requirements: Work closely with clients to grasp their business challenges and craft tailored software solutions that drive efficiency and growth.</li>
              <li>Develop and Maintain Solutions: Design, build, and sustain robust applications, ensuring they meet high standards of performance and scalability.</li>
              <li>Build Technical Capacity: Support clients in enhancing their technical skills and infrastructure, fostering long-term success beyond the immediate project scope.</li>
              <li>Lead Projects: Oversee various projects, providing leadership and direction to ensure successful delivery and implementation.</li>
            </ul>
          </p>
        </div>
          <h4>Software Development Intern</h4>
          <p><strong>Company:</strong> Tech4Good Community</p>
          <p><strong>Duration:</strong> June 2023 - August 2023</p>
          <p><strong>Responsibilities:</strong> Worked on developing and building software solutions.</p>
        </div>

        <div class="experience-item">
          <h4>Machine Learning Intern</h4>
          <p><strong>Company:</strong> Rubixe - AI</p>
          <p><strong>Duration:</strong> September 2022 - November 2023</p>
          <p><strong>Responsibilities:</strong> Completed a project focused on data visualization and developing a model for Employee Attrition. This project allowed me to apply my analytical skills and gain valuable insights into employee retention strategies.</p>
        </div>

        <div class="experience-item">
          <h4>Android Development Intern</h4>
          <p><strong>Company:</strong> Milkvilla</p>
          <p><strong>Duration:</strong> June 2022 - November 2023</p>
          <p><strong>Responsibilities:</strong> Building front end of the Milkvilla App.</p>
        </div>
      </div>
    </div>

    <div class="skills">
      <h3>Skills</h3>
      <div class="skills-category">
        <h4>Software Development</h4>
        <ul>
          <li>Python</li>
          <li>C</li>
          <li>Java</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>DBMS</h4>
        <ul>
          <li>Database Design</li>
          <li>SQLite</li>
          <li>MariaDB</li>
          <li>SQL</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Web Technologies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Frappe Framework</li>
          <li>Flask</li>
          <li>JWT Authentication</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Soft Skills</h4>
        <ul>
          <li>Languages Known - 5</li>
          <li>Public Speaking</li>
          <li>Event Management</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.about-section {
  max-width: 900px;
  margin: 0 auto;
  background: #fefefe;
  padding: 15px;
  font-family: 'Poppins', sans-serif;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Education and Experience in separate boxes */
.education,
.experience {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 30px;
}

/* Headings styling */
h2 {
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 20px;
}

h4 {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

/* Education and Experience items styling */
.education-item,
.experience-item {
  margin-bottom: 20px;
}

.education-item p,
.experience-item p {
  margin: 0;
  padding-left: 10px;
  font-size: 16px;
  line-height: 1.5;
}

.experience-item ul {
  list-style-type: disc;
  padding-left: 20px;
}

.experience-item ul li {
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 5px;
}

.skills {
  padding: 20px;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-bottom: 30px;
}

.skills h3 {
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.skills-category {
  margin-bottom: 20px;
}

.skills-category h4 {
  font-size: 20px;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 5px;
}

.skills-category ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between list items */
}

.skills-category ul li {
  font-size: 16px;
  color: #2c3e50;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-category ul li {
    display: block;
    margin-bottom: 10px;
  }
}
</style>
