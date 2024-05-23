import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoCard from "../components/TodoCard";
import { useAppDispatch } from "../store/hooks";
import { toggleCheckbox } from "../store/todosSlice";

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: jest.fn(),
}));

jest.mock("../store/todosSlice", () => ({
  toggleCheckbox: jest.fn(),
}));

describe("TodoCard Component", () => {
  const mockDispatch = jest.fn();
  const todo = {
    key: 1,
    todoText: "Test Todo",
    isCompleted: false,
    id: 1,
  };

  beforeEach(() => {
    (useAppDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  it("should render the todo text", () => {
    render(<TodoCard {...todo} />);

    const todoText = screen.getByText(todo.todoText);
    expect(todoText).toBeInTheDocument();
  });

  it("should handle checkbox click", () => {
    render(<TodoCard {...todo} />);

    const checkbox = screen.getByTestId(`checkbox-${todo.id}`);
    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith(toggleCheckbox(todo.id));
  });
});
