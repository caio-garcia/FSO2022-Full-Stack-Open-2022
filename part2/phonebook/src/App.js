import services from "./services/services";

import { useState, useEffect } from "react";
import { NewNumber } from "./components/NewNumber";
import { Numbers } from "./components/Numbers";
import { SearchBar } from "./components/SearchBar";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");

  const fetchData = () => {
    services.getAll().then((firstUpload) => setPersons(firstUpload));
  };
  useEffect(() => {
    fetchData();
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
      services.addOne(newName);
    }
  }

  function handleFiltering(e) {
    setSearch(e.target.value);
  }

  function handleChange(e) {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  }

  function deleteRecord(e) {
    if (
      window.confirm(
        `${e.target.name} is about to be deleted \nWould you like to delete it?`
      )
    ) {
      services.deleteOne(e.target.value);
      fetchData();
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar handleFiltering={handleFiltering} />
      <div>
        <NewNumber handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <h2>Numbers</h2>
      <Numbers persons={persons} search={search} deleteRecord={deleteRecord} />
    </div>
  );
};

export default App;
