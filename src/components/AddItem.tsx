import React, { useState } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const AddItem: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <div className="m-1 w-1/2 justify-center flex">
      {!showForm && (
        <button
          type="button"
          data-testid='add-new-btn'
          className="bg-[#ff6767] rounded-lg p-1 text-white"
          onClick={() => setShowForm(true)}
        >
          Add New TO-DO
        </button>
      )}
      {showForm && (
        <form
          data-testid='todo-form'
          className="flex items-center w-full gap-1 flex-col"
          onSubmit={(e) => {
            handleAdd(e);
            setShowForm(false);
          }}
        >
          <textarea
            name="task"
            placeholder="Add new task"
            className="rounded-lg p-1 w-full bg-gray-200 text-gray-800 text-xs h-14 placeholder-slate-400"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            data-testid='submit-btn'
            className="bg-[#ff6767] p-1 text-white rounded-lg justify-start"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddItem;
