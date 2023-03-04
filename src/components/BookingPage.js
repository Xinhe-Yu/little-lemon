import Button from "./layout/Button";
import Section from "./layout/MainSection";
import { useEffect, useState } from "react";
import { submitAPI, fetchAPI } from './js/api';
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, today, isconfirmed, setConfirmation }) => {

  const initialValues = {
    date: today,
    time: "17:00",
    number: "2",
    occasion: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const navigate = useNavigate();
  const availableOptions = availableTimes[formData.date] !== undefined ? availableTimes[formData.date].map(time => <option key={time}>{time}</option>) : <option disable="true">Not Available</option>;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setConfirmation(submitAPI(formData));
  };

  useEffect(() => {
    if (isconfirmed === true) {
      setFormData("");
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
}

const BookingPage = () => {
  const [isconfirmed, setConfirmation] = useState(false);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toLocaleDateString('fr-CA');
  const day = parseInt(today.slice(8, 10));

  const initializeTimes = () => {
    let availableTimes = {};
    for (let i = day; i <= 31; i++) {
      let date;
      if (i % 7 === 5) {
        continue;
      } else if (i < 10) {
        date = `2023-03-0${i}`;
        availableTimes[date] = fetchAPI(new Date(date));
      } else {
        date = `2023-03-${i}`;
        availableTimes[date] = fetchAPI(new Date(date));
      }
    }
    return availableTimes
  };

  const availableTimes = initializeTimes();
  console.log(isconfirmed)
  return (
    <Section className="bg-white">
      <BookingForm availableTimes={availableTimes} today={today} isconfirmed={isconfirmed} setConfirmation={setConfirmation} />
    </Section>
  )
}


export default BookingPage
export { BookingForm }