import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "./provider/FormDataProvider";
import { submitAPI } from './js/api';
import Button from "./layout/Button";

const BookingForm = ({ availableTimes, today, endDay, isconfirmed, setConfirmation }) => {
  const { formData, setFormData } = useFormData();

  const navigate = useNavigate();
  const notAvailable = "Not Available";
  const disableOption = <option value="" disabled>{notAvailable}</option>;
  const availableOptions = availableTimes == undefined ? disableOption : availableTimes[formData.date] == undefined ? disableOption : availableTimes[formData.date].map(time => <option key={time}>{time}</option>);

  const isValid = (formData.time.length > 1 && formData.date.length > 1 && formData.number <= 10);
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
      <span style={{ display: "block", color: "#424242", }}>We accept reservations up to 6 weeks in advance.</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date <span className="alert">*</span></label>
        <input
          type="date"
          id="res-date"
          data-testid="res-date"
          name="date"
          min={today}
          max={endDay}
          value={formData.date}
          onChange={handleChange}
          required
        />


        <label htmlFor="res-time">Choose time <span className="alert">*</span></label>
        <select id="res-time"
          data-testid="res-time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {availableOptions}
        </select>
        <label htmlFor="guests">Number of guests <span className="alert">*</span></label>
        <input
          type="number"
          placeholder="2"
          min="1" max="10"
          id="guests"
          data-testid="guests"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        {formData.number > 10 ? <span className="txt-pr-g">Please contact us by phone or email for reservations for more than 10 people.</span> : null}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
          data-testid="occasion"
          name="occasion"
          placeholder="occasion"
          value={formData.occasion}
          onChange={handleChange}>
          <option value="" disabled hidden style={{ color: "#424242" }}>Occasion...</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
        <Button type="submit" value="Make Your reservation" isValid={isValid} >Make Your reservation</Button>
      </form>
    </>
  )
};

export default BookingForm;