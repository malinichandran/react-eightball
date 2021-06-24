import React from 'react';
import EightBall from './EightBall';
import answers from './answers';

const App = () => {
  return (
    <div>
      <EightBall answers={answers}/>
    </div>
  )
}

export default App;
