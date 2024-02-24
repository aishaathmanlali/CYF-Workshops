import { useState } from "react";

function CaughtPokemon(Props) {
const [caught, catchPokemon] = useState(0);
  return (
    <div>
      <p>Caught {caught} pokemon on {Props.date}</p>
      <button onClick={()=> catchPokemon(caught+1)}>Catch Pokemon</button>
    </div>
  );

}



export default CaughtPokemon;