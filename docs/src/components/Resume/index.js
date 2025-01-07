import React from 'react';

const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <h1>My Resume</h1>
      <iframe
        src="/../../assets/documents/WarrickTsuiCompleteResume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
