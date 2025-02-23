import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Todo from "../model/Todo";

function ItemInserterField(props: {
  addTodoItemToList: (todoItem: Todo) => void;
  todoItemList: Todo[];
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newId = props.todoItemList.length + 1;
      props.addTodoItemToList(new Todo(newId, inputValue));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex items-center w-full">
        <PencilIcon className="absolute left-5 w-6 h-6 text-neutral-400" />
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          placeholder="Add a new todo item..."
          className="w-200 flex border border-neutral-800 focus:outline-none bg-neutral-700 placeholder:text-neutral-400 placeholder:italic placeholder:text-2xl text-2xl rounded-md py-3 px-15 text-white my-5"
        />
        <button
          type="submit"
          className="bg-green-800 text-white m-5 py-4 px-4 rounded-xl font-bold hover:rounded-4xl ease-linear transition-all duration-200"
        >
          <PlusIcon className="w-7 h-7" />
        </button>
      </div>
    </form>
  );
}

export default ItemInserterField;
