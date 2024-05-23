import React from "react";
import { useAppDispatch } from "../store/hooks";
import { toggleCheckbox } from "../store/todosSlice";

interface TodoDetails {
  key: number;
  todoText: string;
  isCompleted: boolean;
  id: number;
}

const TodoCard: React.FC<TodoDetails> = ({
  todoText,
  key,
  isCompleted,
  id,
}) => {
  const dispatch = useAppDispatch();

  const handleCheckboxClick = (id: number) => {
    dispatch(toggleCheckbox(id));
  };

  return (
    <div
      className={`w-2/5 ${
        isCompleted ? `bg-green-400` : `bg-red-400`
      } m-1 rounded-lg flex h-fit items-center`}
    >
      <input
        type="checkbox"
        className="m-2 cursor-pointer"
        onChange={() => handleCheckboxClick(id)}
        checked={isCompleted}
        data-testid={`checkbox-${id}`}
      />
      <span className="text-white ml-2 text-xs py-2">{todoText}</span>
    </div>
  );
};

export default TodoCard;
