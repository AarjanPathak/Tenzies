import React from 'react'
import './App.css';
import Die from './components/Die'
import {nanoid} from "nanoid"


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
    setDieNumbers(oldDice=>oldDice.map(die => {
      return die.isActive ? die : generateNewDie()
    }))
  }

  function activeDice(id){
    setDieNumbers(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isActive: !die.isActive} : die
    }))
  }

  React.useEffect(()=>{
    console.log("Dice state changed!")
  }, [dieNumbers])

  const diceElements = dieNumbers.map((die) => {
    return <Die value = {die.number} isActive = {die.isActive} activeDice = {() => activeDice(die.id)}/>
  })

  return(
    <div className="container">
      <main className="main">
        <h1 className='title'>Tenzies</h1>
        <p className='game-info'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls </p>
        <div className='dice-container'>
          {diceElements}
        </div>
        <button onClick={rollDice} className="roll-btn">Roll</button>
      </main>
    </div>
  )
}

export default App;