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
      quizStarted ? <Quiz /> : <Intro handleClick={startQuiz} />
  );
}

export default App;
