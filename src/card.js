import React from "react";


function Card({title})
{
    return(
        <div class="card" style={{margin: 50 + "px" }}>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{title}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>
</div>
    );
}

export default Card;