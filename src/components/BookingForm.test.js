import { render, screen } from "@testing-library/react";
import BookingPage, { BookingForm } from "./BookingPage";

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})