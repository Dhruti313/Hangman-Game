import { useState } from "react";
import words from "./wordList.json"
import {HangmanDrawing} from "./HangmanDrawing";
import {HangmanWord} from "./HangmanWord";
import {KeyBoard} from "./KeyBoard";


function App() {
  const[wordToGuess , setwordToGuess] = useState(() =>{
    return words[Math.floor(Math.random() * words.length)]
  })

 const[guessedLetters , setguessedLetters] = useState([])
  return (
    <div style={
      {
        maxWidth : "800px" ,
        display : "flex" , 
        flexDirection:"column",
        gap:"2rem",
        margin:"0 auto",
        alignItems:"center"
      }
    }>
      <div style={{fontSize:"2rem" , textAlign :"center"}}>
        <HangmanDrawing/>
        <HangmanWord/>
        <KeyBoard/>
      </div>


    </div>



  )
}

export default App;
