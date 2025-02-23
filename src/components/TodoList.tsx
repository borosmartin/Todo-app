import Todo from "../model/Todo";
import TodoItem from "./TodoItem";

function TodoList(props: {
  todoItemList: Todo[];
  handleCheckboxClick: (todoItem: Todo) => void;
}) {
  const todoItemComponents = props.todoItemList.map((todoItem) => {
    return (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        handleCheckboxClick={() => props.handleCheckboxClick(todoItem)}
      />
    );
  });

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5 max-w-7xl mx-auto">
      {todoItemComponents}
    </div>
  );
}

export default TodoList;
