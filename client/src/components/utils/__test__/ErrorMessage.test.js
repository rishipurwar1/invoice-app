import { render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

test("should render same text passed into props", () => {
  render(<ErrorMessage errorMessage="User doesn't exist" />);
  const paragraphElement = screen.getByText(/user doesn't exist/i);
  expect(paragraphElement).toBeInTheDocument();
});
