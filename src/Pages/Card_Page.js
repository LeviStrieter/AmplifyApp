import React from "react";
import Card from "../componets/card";


const Card_Page = () => {
    return(
        <div class="d-inline-flex" margin="20px">
            {<Card title="Card 1"/>}
            {<Card title="Card 2"/>}
            {<Card title="Card 3"/>}
        </div>
    )
}

export default Card_Page;