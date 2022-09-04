import './App.css';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import React from 'react';

function App() {
  const [quizStarted, setQuizStarted] = React.useState(false)

  function startQuiz() {
    setQuizStarted(true)
  }

  return (
    <div className='app'>
      {quizStarted ? <Quiz /> : <Intro handleClick={startQuiz} />}
      <img id="blob-top" src={"./blob_2.png"}/>
      <img id="blob-bot" src={"./blob_1.png"}/>
    </div>
  );
}

export default App;
