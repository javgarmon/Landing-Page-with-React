import React from "react";

const Jumbotron = () =>{
    return(
        <div className="jumbotron bg-light ps-2" style={{margin: "10px"}}>
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg mb-5" href="#" role="button">Learn more</a>
</div>
    )
}

export default Jumbotron