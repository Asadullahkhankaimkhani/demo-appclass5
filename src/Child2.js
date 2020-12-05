import React, { useReducer } from "react";
import counterReducer from './CounterReducer';

const Child2 = ()=> {
   
   let [state , dispatch] = useReducer(counterReducer,0)
    return(
        <div>
            <h1>The counter Using useReducer</h1>
            <h3>the value of current Counter is : {state}</h3>
            <button onClick={()=> dispatch("INCREMENT")}>Updating value</button>
        </div>
    )
}
export default Child2;