import { useState } from 'react';
import {Item1, Item2} from "./components/items.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import SimpleClassComponent from "./components/SimpleClassComponent.jsx";
import SimpleFunctionComponent from "./components/SimpleFunctionalComponent.jsx";
import HooksContainer from './components/HooksContainer.jsx';
import ThemeComponent from './components/ThemeComponent.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={<SimpleClassComponent />}/>
            <Route path="/functional" element={<SimpleFunctionComponent item1={Item1} item2={Item2}/>}/>
            <Route path="/hooks" element={<HooksContainer/>}/>
            <Route path="/theme" element={<ThemeComponent/>}/>
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;