import Button from "./layout/Button";
import Section from "./layout/MainSection";
import { useState, /* useEffect */ } from "react";

/* import { useFormik } from "formik";
import * as Yup from 'yup'; */

const BookingForm = () => {
  const initialValues = {
    date: "",
    time: "17:00",
    number: "2",
    occasion: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialValues);
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="2"
        min="1" max="10"
        id="guests"
        name="number"
        value={formData.number}
        onChange={handleChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion"
        name="occasion"
        placeholder="occasion"
        value={formData.occasion}
        onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Button type="submit" value="Make Your reservation" style={{ width: "384px", marginTop: "1.5rem" }}>Make Your reservation</Button>
    </form>
  )
}


const BookingPage = () => {


  return (
    <Section>
      <BookingForm />
    </Section>
  )
}

export default BookingPage