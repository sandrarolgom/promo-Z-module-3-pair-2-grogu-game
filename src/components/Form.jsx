



function Form({setName}) {
   const handleChange=(ev)=>{
    console.log("hi")
    setName(ev.target.value)
   }
  return (
    <form className="form">
        <label htmlFor=""> Introduce tu nombre para jugar: </label>
        <input type="text" placeholder="Tu nombre:"onChange={handleChange}/>


    </form>
  
  )
}

export default Form;