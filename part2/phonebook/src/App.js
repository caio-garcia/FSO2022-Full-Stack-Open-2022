import services from "./services/services";

import { useState, useEffect } from "react";
import { NewNumber } from "./components/NewNumber";
import { Numbers } from "./components/Numbers";
import { SearchBar } from "./components/SearchBar";
import { Message } from "./components/Message";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");

  const [message, setMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("green");

  const fetchData = () => {
    services.getAll().then((firstUpload) => setPersons(firstUpload));
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const fitleredPerson = persons.filter((elem) => {
      return elem.name === newName.name;
    });
    if (fitleredPerson.length > 0) {
      if (
        window.confirm(
          `${newName.name} already exists. Would you like to replace old number with a new one?`
        )
      ) {
        services.updateOne(fitleredPerson[0].id, newName).then(fetchData());
      }
    } else {
      services.addOne(newName).then(fetchData());
      setTypeMessage("green");
      setMessage("Successfully added!");
      setTimeout(() => setMessage(""), 2000);
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
      setMessage("Sucessfully deleted!");
      setTimeout(() => setMessage(""), 2000);
      services.deleteOne(e.target.value).then(fetchData());
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} messageType={typeMessage} />
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
