import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [search, setSearch] = useState("");
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

  function handleFiltering(e) {
    setSearch(e.target.value);
  }

  function handleChange(e) {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFiltering} />
      </div>
      <form>
        <h2>Add a new</h2>
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
        {persons
          .filter((elem) =>
            elem.name.toLocaleLowerCase().includes(search.toLowerCase())
          )
          .map((curr) => {
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
