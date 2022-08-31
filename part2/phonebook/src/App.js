import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      persons.filter((elem) => {
        return elem.name === newName.name;
      }).length > 0
    ) {
      window.alert(`${newName.name} already exists!`);
    } else {
      setPersons([...persons, newName]);
    }
  }

  function handleChange(e) {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input name="name" onChange={handleChange} />
        </div>
        <div>
          number: <input name="number" onChange={handleChange} />
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
              <p>
                {curr.name} {curr.number}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
