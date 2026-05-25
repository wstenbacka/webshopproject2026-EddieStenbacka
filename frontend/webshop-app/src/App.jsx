import { useState } from 'react';
import SimpleClassComponent from "./components/SimpleClassComponent.jsx";
import SimpleFunctionComponent from "./components/SimpleFunctionalComponent.jsx";
import CounterWithUseState from './components/hooks/CounterWithUseState.jsx';
import CounterWithoutHook from './components/hooks/CounterWithoutHook.jsx';
import {Item1, Item2} from "./components/items.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Navbar/>
        <CounterWithoutHook/>
        <CounterWithUseState/>

        <>SimpleClassComponent</>
        <>SimpleFunctionalComponent item1 = {Item1}, item2 = {Item2}</>

        <Routes>
          <Route>path="/" element={<SimpleClassComponent/>}</Route>
          <Route>path="/functional" element={<SimpleFunctionComponent item1={Item1} item2 = {Item2}/>}</Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
