

function Container({item}){

    return(
        <section className="goods-container">
        {/*variable de estado cookie*/}
        {item.map((eachItem, index)=><div key={index} className="goods-item">{eachItem}</div>)}
        
        
      </section>

    )
}
 export default Container;