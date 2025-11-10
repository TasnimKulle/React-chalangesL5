import React, { useState } from "react";

export const useForm = (intialValue) => {
  // intialValue waa valueska oo form ka hayo
  const [values, setValues] = useState(intialValue);
  const handleChange = (event) => {
    // input
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  //form reset garee oo emptyka dhig
  const resetForm = () => setValues(intialValue);
  return { values, handleChange, resetForm };
};
