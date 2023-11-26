import React from 'react';

const HomePage = ({ startEnrollment }) => {
  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <button onClick={startEnrollment}>Enroll Now!</button>
    </div>
  );
};

export default HomePage;
