import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

describe("App", () => {
  it("renders the app component", () => {
    render(<App />);
    expect(screen.getByText("Select Pizza Toppings")).toBeInTheDocument();
  });

  it("renders the checkbox unchecked initially", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("renders the topping 'Cheese' initially", () => {
    render(<App />);
    const topping = screen.getByText("Cheese");
    expect(topping).toBeInTheDocument();
  });

  it("checks the checkbox and renders the topping 'Pepperoni'", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    const topping = screen.getByText("Pepperoni");
    expect(topping).toBeInTheDocument();
  });

  it("unchecks the checkbox and removes the topping 'Pepperoni'", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    const topping = screen.queryByText("Pepperoni");
    expect(topping).not.toBeInTheDocument();
  });

  it("toggles the checkbox and updates the topping list", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    userEvent.click(checkbox);
    const topping = screen.queryByText("Pepperoni");
    expect(topping).toBeInTheDocument();
  });
});