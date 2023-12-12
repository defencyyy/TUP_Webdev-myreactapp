import React from "react";

export const User = (props) => {
  return (
    <div>
      {props.planet} : {props.rock ? "Rock = True" : "Gas = True"}
    </div>
  );
};
