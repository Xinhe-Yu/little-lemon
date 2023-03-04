import Section from "./layout/MainSection";
import img from "../assets/restaurant.jpg";
import { useFormData } from "./provider/FormDataProvider";

const ConfirmedBooking = () => {
  const { formData } = useFormData();
  console.log(formData);
  return (
    <Section >
      <div>
        <img src={img} alt="Little Lemon Restaurant"></img>
      </div>
      <div>
        <h1>Confirmation</h1>
        <p>{formData.date} {formData.time} </p>
        <p>Dinner at Littler Lemon</p>
        <p>{formData.number} person</p>
        {formData.occasion ? <p>Happy {formData.occasion}!</p> : null}
      </div>
    </Section>
  )
};

export default ConfirmedBooking;