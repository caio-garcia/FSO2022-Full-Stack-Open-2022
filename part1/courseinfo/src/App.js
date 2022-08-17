function App() {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  // const part1 = {
  //   name: "Fundamentals of React",
  //   exercises: 10,
  // };
  // const part2 = {
  //   name: "Using props to pass data",
  //   exercises: 7,
  // };
  // const part3 = {
  //   name: "State of a component",
  //   exercises: 14,
  // };

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };
  const Content = (props) => {
    const Part = () => {
      return (
        <p>
          {props.part} {props.exercises}
        </p>
      );
    };
    return <Part />;
  };

  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].name} exercises={parts[0].exercises} />
      <Content part={parts[1].name} exercises={parts[1].exercises} />
      <Content part={parts[2].name} exercises={parts[2].exercises} />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
}

export default App;
