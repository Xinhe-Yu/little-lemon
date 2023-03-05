import BookingForm from "./BookingForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { FormDataProvider } from "./provider/FormDataProvider";
import { BrowserRouter } from "react-router-dom";

const renderContent = (<BrowserRouter>
  <FormDataProvider>
    <BookingForm />
  </FormDataProvider>
</BrowserRouter>);
describe("Reservation Form", () => {
  test('Renders the BookingForm heading', () => {
    render(renderContent);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test("Submission is disabled if guest number is more than 12", () => {
    const date = "2023-03-12";
    const time = "17:00";
    const number = "12";
    const handleSubmit = jest.fn();

    render(renderContent);
    const numberInput = screen.getByTestId(/guests/i);
    fireEvent.change(numberInput, { target: { value: number } });
    const dateInput = screen.getByTestId(/res-date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByTestId(/res-time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("The submission is successful when all the selections have been completed", () => {
    const date = "2023-03-23";
    const time = "17:00";
    const number = "2";
    const handleSubmit = jest.fn();

    render(renderContent);
    const numberInput = screen.getByTestId(/guests/);
    fireEvent.change(numberInput, { target: { value: number } });

    const dateInput = screen.getByTestId(/res-date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByTestId(/res-time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith(date, time, number);

  });
})