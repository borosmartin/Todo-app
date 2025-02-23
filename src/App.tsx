import ItemInserterField from "./components/ItemInserterField";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import Todo from "./model/Todo";

function App() {
  const [todoItems, setTodoItems] = useLocalStorage<Todo[]>("todos", []);

  const addTodoItemToList = (todoItem: Todo) => {
    setTodoItems([...todoItems, todoItem]);
  };

  const handleCheckboxClick = (todoItem: Todo) => {
    setTodoItems(todoItems.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div className="bg-neutral-800">
      <div className="flex flex-col items-center min-h-screen p-5 max-w-7xl mx-auto">
        <div className="flex items-center pb-5">
          <h1 className="text-5xl font-bold p-5 text-white">Todo App</h1>
          <ItemInserterField
            addTodoItemToList={addTodoItemToList}
            todoItemList={todoItems}
          />
        </div>
        <TodoList
          todoItemList={todoItems}
          handleCheckboxClick={handleCheckboxClick}
        />
      </div>
    </div>
  );
}

export default App;
