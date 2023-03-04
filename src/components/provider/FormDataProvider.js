import { createContext, useContext, useState } from "react";

const FormDataContext = createContext(undefined);

export const FormDataProvider = ({ children }) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toLocaleDateString('fr-CA');
  const initialValues = {
    date: today,
    time: "17:00",
    number: "2",
    occasion: "",
  };
  const [formData, setFormData] = useState(initialValues);
  return (
    <FormDataContext.Provider
      value={{ formData, setFormData, initialValues }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);