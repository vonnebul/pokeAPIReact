import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MesPokemons from './Components/MesPokemons';
import MonPokedex from './Components/MonPokedex';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<MesPokemons/>}/>
      <Route path='/MonPokedex' element={<MonPokedex/>}/>
    </Routes>
    </>
  );
}

export default App;
