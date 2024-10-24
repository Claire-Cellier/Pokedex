import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const Previous = () => {
    setPokemonIndex(pokemonIndex - 1)
  };

  const Next = () => {
    setPokemonIndex(pokemonIndex + 1)
  };

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button type="button" onClick={Previous}>Précédent</button>
      <button type="button" onClick={Next}>Suivant</button>
    </>
  );
}

export default App;