import React, { useState } from 'react';
import "./EightBall.css";

const randIdx = (arr) => {
    const id = Math.floor(Math.random() * arr.length);
    return arr[id];
} 

const EightBall = (props) => {
    const [ msg, setMsg ] = useState("Think of a question.");
    const [ color, setColor] = useState("black");

    const handleClick = () => {
        const{ msg, color } = randIdx(props.answers);
        setMsg(msg);
        setColor(color);
    }
    return(
        <div className="EightBall" onClick ={handleClick} style={{backgroundColor:color}}>
            <b>{msg}</b>
        </div>
    )
}

export default EightBall;