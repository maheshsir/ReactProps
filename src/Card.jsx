import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.photo} alt="avatar_img" />
      <p>{props.Number}</p>
      <p>{props.Email}</p>
    </div>
  );
}

export default Card;
