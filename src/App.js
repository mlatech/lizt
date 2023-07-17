import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Plant from "./components/Plant.js";
import Home from "./components/Home.js";
import Info from "./components/Info.js";


export default function App() {
  return (
    <div className="app">
      <Routes>
     
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/plants"
          element={<Plant />}
        />
        <Route
          path="/info"
          element={<Info />}
        />
        
      </Routes>
    </div>
  );
}


