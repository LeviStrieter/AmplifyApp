import React from "react";


const Card = (width) => {
    return(
        <div class="card" style={{width: 18 + "rem", padding: 25 + "px", margin: 50 + "px" }}>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    );
}

export default Card;