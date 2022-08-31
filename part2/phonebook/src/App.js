import axios from "axios";
import { useState, useEffect } from "react";
import { NewNumber } from "./components/NewNumber";
import { Numbers } from "./components/Numbers";
import { SearchBar } from "./components/SearchBar";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
