import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AddItem from "../components/AddItem";

describe("Test cases fro AddItem component", () => {
  const todo = "test";
  const mockHandleAdd = jest.fn();
  const mocksetTodo = jest.fn();
  it("should render Add Button", () => {
    render(
      <AddItem todo={todo} setTodo={mocksetTodo} handleAdd={mockHandleAdd} />
    );

    const addButton = screen.getByRole("button", { name: "Add New TO-DO" });
    expect(addButton).toBeInTheDocument();
  });

  it("should render form when add button is clicked", () => {
    render(
      <AddItem todo={todo} setTodo={mocksetTodo} handleAdd={mockHandleAdd} />
    );
    const addButton = screen.getByTestId("add-new-btn");
    fireEvent.click(addButton);

    const textArea = screen.getByPlaceholderText("Add new task");
    const submitButton = screen.getByTestId("submit-btn");

    expect(textArea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should call setTodo and handleAdd when form is submitted", () => {
    render(
      <AddItem todo={todo} setTodo={mocksetTodo} handleAdd={mockHandleAdd} />
    );

    const addButton = screen.getByTestId("add-new-btn");

    fireEvent.click(addButton);

    const textArea = screen.getByPlaceholderText("Add new task");
    fireEvent.change(textArea, { target: { value: "New Task" } });

    expect(mocksetTodo).toHaveBeenCalledWith("New Task");
    const form = screen.getByTestId("todo-form");
    fireEvent.submit(form);
    expect(mockHandleAdd).toHaveBeenCalled();
  });
});
