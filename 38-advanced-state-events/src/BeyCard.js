import React from "react";

const BeyCard = (props) => {
  let { bey } = props

  function clickHandler() {
    console.log("clicking")
    props.clickHandler(bey.id)
  }

  return (
    <div>
      <h3>{bey.name}</h3>
      <img alt='' src={bey.img} onClick={clickHandler} />
    </div>
  );
};

export default BeyCard;
