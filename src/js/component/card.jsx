import React from "react";

const Card = ()=>{    
    return(
        <div className="card" style={{width: "18rem", margin: "10px"}}>
  <img src="https://api.lorem.space/image/movie?w=500&h=325" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="reo text-center"><a href="#" className="btn btn-primary">Go somewhere</a></div>
  </div>
</div>
    )
}

export default Card