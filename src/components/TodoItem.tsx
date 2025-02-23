import Todo from "../model/Todo";

function TodoItem(props: {
  todoItem: Todo;
  handleCheckboxClick: (todoItem: Todo) => void;
}) {
  return (
    <div className="flex mx-auto bg-neutral-500 rounded-lg shadow-md p-5 items-center m-5">
      <input
        className="rounded-md"
        type="checkbox"
        value={""}
        onChange={() => props.handleCheckboxClick(props.todoItem)}
      />
      <h2 className="text-xl ml-5">{props.todoItem.text}</h2>
    </div>
  );
}

export default TodoItem;
