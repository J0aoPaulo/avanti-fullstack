import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MostrarPokemon from './components/MostrarPokemon';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/exibirpokemon/:numero" element={<MostrarPokemon />} />
      </Routes>
    </Router>
  );
};

export default App;