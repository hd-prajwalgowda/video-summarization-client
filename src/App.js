import React from 'react';
import Button from '@components/Button';

const App = () => {
  const buttonClicked = () => {
    console.log('Button was clicked');
  };

  return (
    <div>
      <h1>Video Summarization</h1>
      <Button title="Click Me" onClick={buttonClicked} />
    </div>
  );
};

export default App;
