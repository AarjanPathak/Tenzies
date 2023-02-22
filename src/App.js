import React from 'react'
import './App.css';
import Die from './components/Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


const App = () =>{

  const[tenzies, setTenzies] = React.useState(false)
  const[dieNumbers, setDieNumbers] = React.useState(newDice())

  function generateNewDie(){
    return{number: Math.ceil(Math.random()*6), isActive: false, id: nanoid()}
  }

  function newDice(){
    const dice=[]
    for(let i=0;i<10;i++){
      dice.push(generateNewDie())
    }
    console.log(dice)
    return dice
  }

  function rollDice(){
    if(!tenzies){
      setDieNumbers(oldDice=>oldDice.map(die => {
        return die.isActive ? die : generateNewDie()
      }))
    }
    else{
      setTenzies(false)
      setDieNumbers(newDice())
    }
  }

  function activeDice(id){
    setDieNumbers(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isActive: !die.isActive} : die
    }))
  }

  React.useEffect(()=>{
    const allActive = dieNumbers.every(die => die.isActive)
    const firstValue = dieNumbers[0].number;
    const allSameValue = dieNumbers.every(die => die.number === firstValue)
    if(allActive && allSameValue){
      setTenzies(true)
      console.log("YOu won!")
    }
  }, [dieNumbers])

  const diceElements = dieNumbers.map((die) => {
    return <Die value = {die.number} isActive = {die.isActive} activeDice = {() => activeDice(die.id)}/>
  })

  return(
    <div className="container">
      <main className="main">
        {tenzies && <Confetti />}
        <h1 className='title'>Tenzies</h1>
        <p className='game-info'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls </p>
        <div className='dice-container'>
          {diceElements}
        </div>
        <button onClick={rollDice} className="roll-btn">{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
  )
}

export default App;