import React from "react";

export default function Keyword(props) {
  let current = props.dict;

  let keys = Object.keys(current);

  return (
    <>
      {keys.map((index,e) => {
        if(index<3)
        return (<h1 style={{color:"yellow"}} key={index}>{current[e]}</h1>);
        else
        return <span key={index}>{current[e]}</span>
      })}
    </>
  );
}
