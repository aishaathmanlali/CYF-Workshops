function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

function Logo() {
  const appName = "Aisha's Pokedex"
  return (
    <div>
      <h1>Welcome to {appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" />
    </div>
  );
}

function BestPokemon() {
  return (
  <p>My favourite pokemon is Pikachu</p>
  );
}

export default App;
