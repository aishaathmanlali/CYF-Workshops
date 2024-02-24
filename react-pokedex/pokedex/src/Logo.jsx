function Logo(Props) {
  return (
    <div>
      <h1>Welcome to {Props.appName}</h1>
      <img
        onClick={Props.logWhenClicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      />
    </div>
  );
}

export default Logo;
