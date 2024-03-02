import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import BestPokemon from "./BestPokemon.jsx";
import CaughtPokemon from "./CaughtPokemon.jsx";
import PokemonMovesSelector from "./PokemonMovesSelector.jsx";
import PokemonCity from "./PokemonCity.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/logo">Logo </Link>
        <Link to="/best-pokemon">BestPokemon </Link>
        <Link to="/caught-pokemon">CaughtPokemon </Link>
        <Link to="/pokemon-moves-selector">PokemonMovesSelector </Link>
        <Link to="/pokemon-city">PokemonCity </Link>
      </nav>
      <Routes>
        <Route
          element={
            <Logo appName="Aisha's Pokedex" logWhenClicked={logWhenClicked} />
          }
          path="/logo"
        />
        <Route
          element={
            <BestPokemon
              abilities={[
                "Anticipation",
                "Adaptability",
                "Run-Away",
                "Cute-Charm",
              ]}
            />
          }
          path="/best-pokemon"
        />
        <Route
          element={<CaughtPokemon date={new Date().toLocaleDateString()} />}
          path="/caught-pokemon"
        />
        <Route
          element={<PokemonMovesSelector />}
          path="/pokemon-moves-selector"
        />
        <Route element={<PokemonCity />} path="/pokemon-city" />
      </Routes>
      {/* <div>
        <Logo appName="Aisha's Pokedex" logWhenClicked={logWhenClicked} />
        <BestPokemon
          abilities={["Anticipation", "Adaptability", "Run-Away", "Cute-Charm"]}
        />
        <CaughtPokemon date={new Date().toLocaleDateString()} />
        <PokemonMovesSelector />
        <PokemonCity />
      </div> */}
    </BrowserRouter>
  );
}

function logWhenClicked() {
  console.log("It doesn't matter what the message is");
}

export default App;
