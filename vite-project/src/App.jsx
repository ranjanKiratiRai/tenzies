
import Die from './Die'
import {nanoid} from "nanoid"
import { useState   } from 'react'
export default function App(){

  const [dice, setDice] = useState(()=>   generateAllNewDice())
const gameWon=
  dice.every(die=>die.isHeld)&&
  dice.every(die=>die.value ===dice[0].value)











function generateAllNewDice(){
return new Array(10)
.fill(0)
.map(()=>({value: Math.ceil(Math.random()*6),
          isHeld: false,
        id: nanoid()}))  
} 

function rollDice(){
setDice(generateAllNewDice())
}
const diceElements = dice.map(dieObj=><Die  key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={()=> hold(dieObj.id)}/>)

function hold(id){
  setDice(oldDice=>oldDice.map(die=> die.id===id ?{...die, isHeld: !die.isHeld} : die
))


  }


  function rollDice(){
      if (!gameWon){
    setDice(oldDice=>oldDice.map(die=>
      die.isHeld?die: {...die, value: Math.ceil(Math.random()*6)}
    ))
  }
else{
  setDice(generateAllNewDice())
}

  }


  return (
    <main>
      <div className="Dice-container">
        {diceElements }
      </div>

      <button className = "roll-dice" onClick={rollDice}>
        
        {gameWon? 'NewGame': 'Roll'}
        </button>
    </main>
  )
  }