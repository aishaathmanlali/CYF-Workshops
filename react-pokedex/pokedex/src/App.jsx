import Logo from "./Logo.jsx";
import BestPokemon from "./BestPokemon.jsx";
import CaughtPokemon from "./CaughtPokemon.jsx";

function App() {
  return (
    <div>
      <Logo appName="Aisha's Pokedex" />
      <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away", "Cute-Charm"]} />
      <CaughtPokemon date = {new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
