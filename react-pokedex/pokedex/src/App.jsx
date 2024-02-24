import Logo from "./Logo.jsx";
import BestPokemon from "./BestPokemon.jsx";
import CaughtPokemon from "./CaughtPokemon.jsx";
import PokemonMovesSelector from "./PokemonMovesSelector.jsx";
import PokemonCity from "./PokemonCity.jsx";

function App() {
  return (
    <div>
      <Logo appName="Aisha's Pokedex" logWhenClicked={logWhenClicked} />
      <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away", "Cute-Charm"]} />
      <CaughtPokemon date = {new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

function logWhenClicked() {
  console.log("It doesn't matter what the message is");
}

export default App;
