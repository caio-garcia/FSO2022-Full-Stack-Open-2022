import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function filteredCountries() {
    return countries.filter((curr) =>
      curr.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <div>
        find countries <input onChange={handleSearch} />
      </div>
      <div>
        {filteredCountries().length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries().length === 1 ? (
          <div>
            <h2>
              {filteredCountries().map((elem) => {
                return (
                  <div key={elem["cca3"]}>
                    <h3>{elem["name"]["common"]}</h3>
                    <p>capital: {elem["capital"]}</p>
                    <p>area: {elem["area"]}</p>
                    <p>languages spoken:</p>
                    <ul>
                      {Object.values(elem["languages"]).map((el) => {
                        return <p>{el}</p>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </h2>
          </div>
        ) : (
          filteredCountries().map((elem) => {
            return <p key={elem["cca3"]}>{elem["name"]["common"]}</p>;
          })
        )}
      </div>
    </>
  );
}

export default App;
