interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void; // fonction sans retour,de renvoyer undefined.
    pokemonList: Pokemon[];
  }
  
const handleClick = ({index}) =>
{index === 3 ? 
 alert("pika pikachu !!!") 
: null};
 

  function NavBar({pokemonIndex, setPokemonIndex, pokemonList} : NavBarProps) {
    return (
      <section>
        {pokemonList.map((pokemon, index) => (
          <button type="button" 
          onClick={() => {
            setPokemonIndex(index);
            handleClick({index});
          }}
          key={pokemon.name}>{pokemon.name}</button>
        ))}
      </section>
    )
    }

  export default NavBar;