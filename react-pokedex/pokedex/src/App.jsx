function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

function Logo() {
  const appName = "Aisha's Pokedex";
  return (
    <div>
      <h1>Welcome to {appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" />
    </div>
  );
}

function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favourite pokemon is Pikachu</p>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 pokemon on {date}</p>;
}
export default App;
