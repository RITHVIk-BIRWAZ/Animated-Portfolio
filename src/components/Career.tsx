import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in AI & Data Science</h4>
                <h5>A J Institute of Engineering and Technology</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Engineering in Artificial
              Intelligence & Data Science at AJIET, Mangalore. CGPA: 8.33 (Till
              4th Semester). Exploring machine learning, deep learning, computer
              vision, and full-stack web development through hands-on projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Grade — Science (PCMC)</h4>
                <h5>St. Raymond's Degree College</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Completed 12th grade in Science stream (Physics, Chemistry,
              Mathematics, Computer Science) with an aggregate of 86.66%.
              Mangalore, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
