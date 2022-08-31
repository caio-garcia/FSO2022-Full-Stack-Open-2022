import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPersons([...persons, newName]);
  }

  function handleChange(e) {
    setNewName({ ...newName, name: e.target.value });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input name="name" onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((curr) => {
          return (
            <li key={Math.random()} style={{ listStyle: "none" }}>
              <p>{curr.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
