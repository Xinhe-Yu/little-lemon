import Section from "./layout/MainSection";
import { useState } from "react";
import { fetchAPI } from './js/api';
import BookingForm from "./BookingForm";

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
  return (
    <Section className="bg-white">
      <BookingForm availableTimes={availableTimes} today={today} isconfirmed={isconfirmed} setConfirmation={setConfirmation} />
    </Section>
  )
}


export default BookingPage