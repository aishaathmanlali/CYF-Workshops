import { useState } from "react";

function CaughtPokemon(Props) {
  const [caught, catchPokemon] = useState([]);
  const [names, setNames] = useState([
    "Pikachu",
    "Squirtle",
    "Balbasaur",
    "Caterpie",
    "Metapod",
  ]);
  const index = Math.floor(Math.random() * names.length);
  return (
    <div>
      <p>
        Caught {caught.length} pokemon on {Props.date}
      </p>
      <button onClick={() => catchPokemon(caught.concat(names[index]))}>
        Catch Pokemon
      </button>
      <ul>
        {caught.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon;
