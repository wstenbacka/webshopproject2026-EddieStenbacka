import React, {useState} from "react";

function CounterWithUseEffect() {
    
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log("Count: ", count);
    }

    const decrement = () => {
        setCount(count - 1);
        console.log("Count: ", count);
    }

    return (
        <div>
            <h2>Counter With Use State</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterWithUseEffect;