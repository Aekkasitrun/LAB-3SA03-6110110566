import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: "",
        complete: false,
        lose: false,
    }
}
export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = "" + this.state.guess + c
        if(this.state.attempt < 2){ 
            this.setState({guess})
            if(guess.length === this.state.chars.length){
                if(guess === this.state.word){
                this.setState({guess: "", complete: true})
                }
                else{
                this.setState({guess: "", lose: true})
                }
            }
        }
    }

    


    
    render() {
        return(
            <div className="App">
                <div>
                {Array.from(this.state.chars).map((c, i)=> <CharacterCard value={c} activationHandler={this.activationHandler}/>)}
                </div>
                <h1>{this.state.lose? "You Lose" : ""    }</h1>
                <h1>{this.state.complete? "You Win" : ""    }</h1>
            </div>
        );
    }
}