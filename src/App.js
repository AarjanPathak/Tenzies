import React from 'react'
import logo from './logo.svg';
import './App.css';
import Die from './components/Die'


const App = () =>{

  const[dieNumbers, setDieNumbers] = React.useState(newDice())

  function newDice(){
    const dice=[]
    for(let i=0;i<10;i++){
      dice.push(Math.ceil(Math.random()*6))
    }
    return dice
  }

  function rollDice(){
    setDieNumbers(newDice())
  }

  return(
    <div className="container">
      <main className="main">
        <Die 
          value = {dieNumbers}
        />
        <button onClick={rollDice} className="roll-btn">Roll</button>
      </main>
    </div>
  )
}

export default App;