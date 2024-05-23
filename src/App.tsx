import React, { useState } from "react";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addTodo } from "./store/todosSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const todosList = useAppSelector((state) => state.todos.todosList)
  const [todo, setTodo] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      dispatch(addTodo({id: Date.now(), todo, isCompleted: false}))
      setTodo("")
    }
  };
  

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <header className="text-3xl text-black m-2">TO-DO</header>
      <AddItem todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todosList} />
    </div>
  );
};

export default App;
