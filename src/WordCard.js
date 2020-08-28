import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = c => {
        console.log(`${c} haas been activate`)

        let guess = state.guess + c
        setState({...state, guess: guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('YOU WIN !')
                setState({...state, completed: true})
                //window.location.reload();
                
             //<button onClick={refreshPage}>Click to reload!</button>
            }else{
                console.log('reset, next attempt')
                setState({...state,guess:'',attempt: state.attempt + 1})
            }
        }
        
    }
    
    
    return(
        <div>
            {
                state.chars.map((c,i) => 
                    <CharacterCard value={c} key={i} activationHandler = {activationHandler} attempt={state.attempt}/>)
            }
        </div>
        )
    
}