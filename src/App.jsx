import React from "react"
import clsx from "clsx"
import Header from "./Header"
import Status from './Status'
import { languages } from "./languages"


// console.log(languages)
export default function Hangman() {

  //states value
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessed, setGuessed] = React.useState([])
  

  //dervied value
  const wrongGuessArrayCount = guessed.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessArrayCount)
  // static value
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  // const isgameOver = true
  const isGameWon = currentWord.split("").every(letter => guessed.includes(letter))
  const isGameLost = wrongGuessArrayCount >= languages.length -1

  // console.log(guessed)

  const wordChar = currentWord.split("").map((letter, index) =>
    <span key={index}>{guessed.includes(letter) ? letter.toUpperCase() : ""}</span>
  )

  // console.log(wordChar)

  const languageElements = languages.map((lang, index)=> {

    const isLanguageLost = index < wrongGuessArrayCount
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    const className = clsx("chip", isLanguageLost && "lost")
    return (
      <span
        className={className}
        key={lang.name}
        style={styles}
        >
          {lang.name}
      </span>
    )
  })

  function addGuessedLetter(letter){
    setGuessed(prevLetter => {
      const letterSet = new Set(prevLetter)
      letterSet.add(letter)
      return Array.from(letterSet)
    }
      
    )
  }

  const keyboardElements = alphabet.split("").map(letter => {

        const isGuessed = guessed.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        const className= clsx({
          correct: isCorrect,
          wrong: isWrong
        })

        // console.log(className)
        
        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })


    return (
        <main>
            <Header />
            <Status />
            <div className="languages-chips">
                {languageElements}
            </div>
            <div className="word">
                {wordChar}
            </div>
            <div className="keyboard">
              {keyboardElements}
            </div>
            {(isGameWon || isGameLost) && <button className="new-game">
                New Game
            </button>}
        </main> 
    )
}
