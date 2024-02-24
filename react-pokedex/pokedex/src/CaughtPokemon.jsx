function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 pokemon on {date}</p>;
}

export default CaughtPokemon;