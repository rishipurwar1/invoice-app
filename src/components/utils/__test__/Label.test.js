import { render, screen } from "@testing-library/react";
import Label from "../Label";

test("should render same text passed into props", () => {
  render(<Label labelName="Name" />);
  const labelElement = screen.getByText(/name/i);
  expect(labelElement).toBeInTheDocument();
});
