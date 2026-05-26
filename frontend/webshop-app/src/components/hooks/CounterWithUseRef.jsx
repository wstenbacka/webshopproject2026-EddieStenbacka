import React, {useState, useRef} from "react";

function CounterWithUseRef() {
    
    const [count, setCount] = useState(0);
    const buttonClickedRef = useRef(0);
    let clickCount = 0;

    const increment = () => {
        setCount(count + 1);
        buttonClickedRef.current += 1;
        clickCount += 1;
        console.log("Count: ", count);
        console.log("Button clicked: ", buttonClickedRef, " times");
        console.log("Click count: ", clickCount);
    }

    const decrement = () => {
        setCount(count - 1);
        buttonClickedRef.current += 1;
        clickCount += 1;
        console.log("Count: ", count);
        console.log("Button clicked: ", buttonClickedRef, " times");
        console.log("Click count: ", clickCount);
    }

    return (
        <div>
            <h2>Counter With Use Ref</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterWithUseRef;