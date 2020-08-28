import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Friend";
function App() {
  
  return (
    <div>
      <WordCard value = {word}/>
    </div>
  );

 /* function refreshPage() {
    
    window.location.reload(false);

  }*/
  
 /* return (
    <div>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
);*/
}

export default App;
