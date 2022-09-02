export function Numbers({ persons, search, deleteRecord }) {
  return (
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
              <button value={curr.id} name={curr.name} onClick={deleteRecord}>
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
