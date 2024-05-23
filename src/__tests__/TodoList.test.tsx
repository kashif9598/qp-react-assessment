import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

jest.mock("../components/TodoCard", () => {
  return ({
    todoText,
    isCompleted,
    id,
  }: {
    todoText: string;
    isCompleted: boolean;
    id: number;
  }) => (
    <div data-testid="todo-card" data-completed={isCompleted} data-id={id}>
      {todoText}
    </div>
  );
});

describe("TodoList Component", () => {
  const todos = [
    { id: 1, todo: "Task 1", isCompleted: false },
    { id: 2, todo: "Task 2", isCompleted: true },
    { id: 3, todo: "Task 3", isCompleted: false },
  ];

  it("should render the correct number of TodoCard components", () => {
    render(<TodoList todos={todos} />);

    const todoCards = screen.getAllByTestId("todo-card");
    expect(todoCards).toHaveLength(todos.length);
  });

  it("should render TodoCard components with correct props", () => {
    render(<TodoList todos={todos} />);

    todos.forEach((todo) => {
      const todoCard = screen.getByText(todo.todo);
      expect(todoCard).toBeInTheDocument();
      expect(todoCard).toHaveAttribute(
        "data-completed",
        todo.isCompleted.toString()
      );
      expect(todoCard).toHaveAttribute("data-id", todo.id.toString());
    });
  });

  it("should render an empty list when no todos are provided", () => {
    render(<TodoList todos={[]} />);

    const todoCards = screen.queryAllByTestId("todo-card");
    expect(todoCards).toHaveLength(0);
  });
});
