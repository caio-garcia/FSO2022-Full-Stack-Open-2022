export function Course(props) {
  const { name, parts } = props.course;
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
    </>
  );
}
