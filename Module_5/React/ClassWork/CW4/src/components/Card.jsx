import React from "react";
import './Card.css';

const Card = (props) => {
    return(
        <>
            <div className="card">
                <h2 className="quoteName">{props.quote}</h2>
                <h5 className="autherName">{props.auther}</h5>
            </div>
        </>
    );

}

export default Card;