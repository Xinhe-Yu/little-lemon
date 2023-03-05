import { createContext, useContext, useState } from "react";

const FormDataContext = createContext(undefined);

export const FormDataProvider = ({ children }) => {
  const initialValues = {
    date: "",
    time: "",
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