import React from 'react'
import UserInput from '../UserInput/UserInput'
import './UserOutput.css'
const userOutput = (props) => {
  const style = {
    padding: "12px",
    margin: "auto",
    color:"red"
    
  }
  return (
    <div className="UserOutput">
      <p style={style}>{props.username}</p>
      <p>{props.children}</p>
      <UserInput changed={props.changed} userName={props.username}/>
    </div>
  );
}

export default userOutput;