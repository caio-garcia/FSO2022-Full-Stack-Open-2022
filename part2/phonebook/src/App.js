import { useState } from "react";
import { NewNumber } from "./components/NewNumber";
import { Numbers } from "./components/Numbers";
import { SearchBar } from "./components/SearchBar";

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
      <SearchBar handleFiltering={handleFiltering} />
      <div>
        <NewNumber handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <h2>Numbers</h2>
      <Numbers persons={persons} search={search} />
    </div>
  );
};

export default App;
