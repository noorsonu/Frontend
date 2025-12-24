import React from 'react';

const TestPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Page Working!</h1>
      <p>If you see this, routing is working</p>
      <a href="/surah">Go to Surah Page</a>
    </div>
  );
};

export default TestPage;