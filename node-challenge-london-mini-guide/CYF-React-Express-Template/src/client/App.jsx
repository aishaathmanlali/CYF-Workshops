function App() {
  return (
    <div>
      <h1>LONDON MINI-GUIDE</h1>
      <form>
        <select>
          <option value="main">Select a city</option>
          <option value="Startford">Stratford</option>
          <option value="Harrow">Harrow</option>
          <option value="Heathrow">Heathrow</option>
        </select>
        <br />
        <button id="pharmacies">Pharmacies</button>
        <button id="hospitals">Hospitals</button>
        <button id="doctors">Doctors</button>
        <button id="colleges">Colleges</button>
      </form>
    </div>
  );
}

export default App;
