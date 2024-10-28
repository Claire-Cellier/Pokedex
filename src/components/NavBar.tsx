interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void; // fonction sans retour,de renvoyer undefined.
    pokemonList: Pokemon[];
  }
  
  function NavBar({pokemonIndex, setPokemonIndex, pokemonList} : NavBarProps) {
    return (
      <>
        {pokemonList.map((pokemon, index) => (
          <button type="button" 
          onClick={() => setPokemonIndex(index)}
          key={pokemon.name}>{pokemon.name}</button>
        ))}
      </>
    )}

  export default NavBar;