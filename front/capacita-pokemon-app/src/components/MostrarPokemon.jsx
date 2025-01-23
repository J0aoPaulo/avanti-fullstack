import React from 'react';
import { useParams } from 'react-router-dom';

const MostrarPokemon = () => {
  const { numero } = useParams();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numero}.png`;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Você está vendo o Pokémon #{numero}</h1>
      <img 
        src={imageUrl} 
        alt={`Pokemon ${numero}`} 
        style={{ width: '200px' }} 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'caminho-para-imagem-de-fallback';
        }}
      />
    </div>
  );
};

export default MostrarPokemon;