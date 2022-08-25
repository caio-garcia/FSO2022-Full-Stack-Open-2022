export function Course(props) {
  const { name, parts } = props.course;

  const total = parts.reduce((prev, curr) => {
    return prev + curr.exercises;
  }, 0);

  return (
    <>
      <h1>{name}</h1>
      <ul>
        {parts.map((part) => (
          <li key={part.id} style={{ listStyle: "none" }}>
            <p>
              {part.name} {part.exercises}
            </p>
          </li>
        ))}
      </ul>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </>
  );
}
