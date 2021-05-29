import React from 'react';
import Button from 'components/Button';

import './global.css';

const App = () => {
  const buttonClicked = () => {
    console.log('Button was clicked');
  };

  return (
    <div>
      <p className="text-6xl font-bold">Video Summarization</p>
      <Button title="Click Me" onClick={buttonClicked} />
    </div>
  );
};

export default App;
