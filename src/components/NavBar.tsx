interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }
  
  function NavBar({pokemonIndex, setPokemonIndex, pokemonList} : NavBarProps) {
    return (
      <>
      <button 
        type="button" 
        onClick={() =>
          setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length - 1)}
        >Précédent
      </button>
        <button 
        type="button" 
        onClick={() =>
          setPokemonIndex(pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0)}
        >Suivant
      </button>
      </>
    )
    }
  
  export default NavBar;