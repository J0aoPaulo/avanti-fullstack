import React, { useState, useEffect } from 'react';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({
    number: 1, 
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
  });

  const getRandomPokemon = () => {
    const randomNumber = Math.floor(Math.random() * 150) + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
    setPokemon({ number: randomNumber, imageUrl: url });
  };

  useEffect(() => {
    getRandomPokemon(); 
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Qual Pokémon você é?</h1>
      <div style={{ border: '2px solid #000', padding: '20px', display: 'inline-block' }}>
        <h2>Você é o Pokémon #{pokemon.number}</h2>
        <img src={pokemon.imageUrl} alt={`Pokemon ${pokemon.number}`} style={{ width: '200px' }} />
        <button
          onClick={getRandomPokemon}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sortear Outro Pokémon
        </button>
      </div>
    </div>
  );
};

export default Pokemon;