import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = ()=>
{
    let counterValue = useContext(counterContext);
    return(
    <div><h1>The Counter Using Context API</h1>
        <h3>the value of counter is {counterValue[0]}</h3>
        <button onClick = {()=> counterValue[1](++counterValue[0])}>Updating Value</button>
    </div>
    )
}

export default Child;