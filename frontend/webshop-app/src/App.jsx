import { useState } from 'react';
import {Item1, Item2} from "./components/items.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import SimpleClassComponent from "./components/SimpleClassComponent.jsx";
import SimpleFunctionComponent from "./components/SimpleFunctionalComponent.jsx";
import CounterWithoutHook from './components/hooks/CounterWithoutHook.jsx';
import CounterWithUseState from './components/hooks/CounterWithUseState.jsx';
import CounterWithUseEffect from './components/hooks/CounterWithUseEffect.jsx';
import CounterWithUseRef from './components/hooks/CounterWithUseRef.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Navbar/>
        <CounterWithoutHook/>
        <CounterWithUseState/>
        <CounterWithUseEffect/>
        <CounterWithUseRef/>

        <Routes>
          <Route path="/" element={<SimpleClassComponent />}/>
          <Route path="/functional" element={<SimpleFunctionComponent item1={Item1} item2={Item2}/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;