import React from 'react';
import { Button } from './components/Button';

const App = () => {
  return <div>
      <Button onClick={() =>  console.log('Pressed')}  title="I'm a button" />
  </div>;
};

export default App;
