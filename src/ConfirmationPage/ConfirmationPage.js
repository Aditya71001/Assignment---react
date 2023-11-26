import React, { useEffect } from 'react';

const ConfirmationPage = ({ name, age, resetEnrollment }) => {
  useEffect(() => {
    const countdown = setTimeout(() => {
      resetEnrollment();
    }, 5000);
    

    return () => clearTimeout(countdown);
  }, [resetEnrollment]);

  return (
    <div>
      <p>Your name {name} aged {age} has been added to student system. You may now exit.</p>
    </div>
  );
};

export default ConfirmationPage;
