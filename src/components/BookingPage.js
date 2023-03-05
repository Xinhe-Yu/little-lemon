import Section from "./layout/MainSection";
import { useState } from "react";
import { fetchAPI } from './js/api';
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const [isconfirmed, setConfirmation] = useState(false);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toLocaleDateString('fr-CA');
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const endDay = addDays(today, 42).toLocaleDateString('fr-CA');

  const initializeTimes = () => {
    let availableTimes = {};
    for (let i = today; i !== endDay; i = addDays(i, 1).toLocaleDateString('fr-CA')) {
      if (i % 7 === 5) {
        continue;
      } else if (i < 10) {
        availableTimes[i] = fetchAPI(new Date(i));
      } else {
        availableTimes[i] = fetchAPI(new Date(i));
      }
    }
    return availableTimes
  };

  const availableTimes = initializeTimes();

  return (
    <Section className="bg-white" containerName={"bookingForm"}>
      <BookingForm availableTimes={availableTimes} today={today} endDay={endDay} isconfirmed={isconfirmed} setConfirmation={setConfirmation} />
    </Section>
  )
}


export default BookingPage