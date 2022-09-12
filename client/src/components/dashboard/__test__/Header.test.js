import { render as rtlRender, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import Header from "../Header";
import store from "../../../store";

const mockedSetTodo = jest.fn();

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

test("should render same text passed into props", () => {
  render(<Header openForm={false} setOpenForm={mockedSetTodo} />);
  const paragraphElement = screen.getByText(/There are 0 total invoices./i);
  expect(paragraphElement).toBeInTheDocument();
});
