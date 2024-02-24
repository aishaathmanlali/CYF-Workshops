import { useState } from "react";

function CaughtPokemon(Props) {
  const [caught, setCaught] = useState([]);
  const [names, setNames] = useState([
    "Pikachu",
    "Squirtle",
    "Balbasaur",
    "Caterpie",
    "Metapod",
  ]);
  const index = Math.floor(Math.random() * names.length);

  function catchPokemon() {
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
    }
    setPokemonNameInput("");
  }

  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  return (
    <div>
      <p>
        Caught {caught.length} pokemon on {Props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon;
