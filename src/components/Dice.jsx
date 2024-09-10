

function Dice ({rollDice}){
  const handleClick = () =>{
    
    rollDice()
  }

    return(
        <button className="dice"  onClick={handleClick}>Lanzar Dado</button>

    )
}
export default Dice;