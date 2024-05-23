import React from "react";
import TodoCard from "./TodoCard";

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface TodoProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoProps> = ({ todos }) => {
  
  return (
    <div className="w-full flex flex-col items-center">
      {todos.map((todo) => {
        return <TodoCard key={todo.id} todoText={todo.todo} isCompleted={todo.isCompleted} id={todo.id}/>;
      })}
    </div>
  );
};

export default TodoList;
