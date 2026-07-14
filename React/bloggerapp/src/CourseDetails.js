import React from 'react';

function CourseDetails({ courses }) {
  return (
    <section className="section-card">
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name} - {course.duration}</li>
        ))}
      </ul>
    </section>
  );
}

export default CourseDetails;