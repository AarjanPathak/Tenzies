import React from 'react'
import logo from './logo.svg';
import './App.css';
import Die from './components/Die'


const App = () =>{

  const[dieNumbers, setDieNumbers] = React.useState(newDice())

  function newDice(){
    const dice=[]
    for(let i=0;i<10;i++){
      dice.push({number: Math.ceil(Math.random()*6), isActive: true})
    }
    return dice
  }

  function rollDice(){
    setDieNumbers(newDice())
  }

  const diceElements = dieNumbers.map((die) => {
    return <Die value = {die.number} isActive = {die.isActive} />
  })

  return(
    <div className="container">
      <main className="main">
        <div className='dice-container'>
          {diceElements}
        </div>
        <button onClick={rollDice} className="roll-btn">Roll</button>
      </main>
    </div>
  )
}

export default App;