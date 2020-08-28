import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Friend";
function App() {
  
  const className1 = 'reloadbotton'
  function refreshPage() {
    window.location.reload(false);
  }
  
  
  
  return (
    <div>
      <WordCard value = {word}/>
      <button onClick={refreshPage} className = {className1}>reload!</button>
    </div>
  );


}

export default App;
