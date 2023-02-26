import React from "react";
import Student from "../../assets/noto_student-light-skin-tone.svg";
import Student2 from "../../assets/flat-color-icons_video-file.svg";
import "./StudentVideo.css";

const StudentVideo = () => {
  return (
    <section id="studentvideo" className="studentsec">
      <div className="wrapper">
        <div className="studentbox">
          <img src={Student} alt="img not foud" />
          <h1>23,000+</h1>
          <h2>Students</h2>
        </div>
        <div className="studentbox">
          <img src={Student2} alt="img not foud" />
          <h1>26 Hrs</h1>
          <h2>Video Content</h2>
        </div>
      </div>
    </section>
  );
};

export default StudentVideo;
