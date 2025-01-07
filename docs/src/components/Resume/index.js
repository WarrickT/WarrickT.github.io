import completeResume from '../../assets/documents/WarrickTsuiCompleteResume.pdf';

const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <h1>My Resume</h1>
      <iframe
        src= {completeResume}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
