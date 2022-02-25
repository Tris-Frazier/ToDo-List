function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "schoolwork",
      isCompleted: false,
    },
    {
      text: "grocery shop",
      isCompleted: false,
    },
    {
      text: "paid work",
      isCompleted: false,
    },
    {
      text: "workout",
      isCompleted: false,
    },
  ]);

  const removeToDo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const addTodo = (text) => {
    const newTodo = [...todos, { text, isCompleted: false }];
    setTodos(newTodo);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo todo={todo} index={i} key={i} remove={removeToDo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
