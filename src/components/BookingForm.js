import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "./provider/FormDataProvider";
import { submitAPI } from './js/api';
import Button from "./layout/Button";

const BookingForm = ({ availableTimes, today, isconfirmed, setConfirmation }) => {
  const { formData, setFormData } = useFormData();

  const navigate = useNavigate();
  const availableOptions = availableTimes[formData.date] !== undefined ? availableTimes[formData.date].map(time => <option key={time}>{time}</option>) : <option disabled="true">Not Available</option>;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(submitAPI(formData));
  };

  useEffect(() => {
    if (isconfirmed === true) {
      navigate("/confirmed");
    }
  }, [isconfirmed, navigate]);

  return (
    <>
      <h1>Book Now</h1>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          min={today}
          max="2023-03-31"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {availableOptions}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="2"
          min="1" max="10"
          id="guests"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
          name="occasion"
          placeholder="occasion"
          value={formData.occasion}
          onChange={handleChange}>
          <option value="" disabled hidden style={{ color: "#424242" }}>Occasion...</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <Button type="submit" value="Make Your reservation" style={{ width: "26rem" }}>Make Your reservation</Button>
      </form>
    </>
  )
};

export default BookingForm;