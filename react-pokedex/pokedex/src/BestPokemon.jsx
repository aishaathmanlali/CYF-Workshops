function BestPokemon(Props) {
  return (
    <div>
      <p>My favourite pokemon is Pikachu</p>
      <ul>
        {Props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;