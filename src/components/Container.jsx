

function Container({item}){

    return(
        <section className="goods-container">
        {/*variable de estado cookie*/}
        {item.map((eachItem)=><div className="goods-item">{eachItem}</div>)}
        
        
      </section>

    )
}
 export default Container;