import React from "react";

function SimpleFunctionalComponent() {

    return(
        <div>
            <h1>Functional Component</h1>
            <h2>Item info:</h2>
            <p>ID Item1: {props.item1.id}</p>
            <p>ID Item2: {props.item2.id}</p>
        </div>
    );
}

export default SimpleFunctionalComponent;