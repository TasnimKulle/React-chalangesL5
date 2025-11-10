import React, { useState } from "react";
import { useForm } from "./useForm";

export const MyForm = () => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    phone: "",
    email: "",
    massage: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(values)
    setSubmittedData(values);
    resetForm();
  };
  return (
    <div>
      <h1>My Form </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name :
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <input
              type="Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="massage">
            Massage:
            <textarea
              name="massage"
              value={values.massage}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>my Form Data:</h2>
      {submittedData && (
        <div>
          <p>
            <strong>Name:</strong>
            {submittedData.name}
          </p>
          <p>
            <strong>phone:</strong>
            {submittedData.phone}
          </p>
          <p>
            <strong>Email:</strong>
            {submittedData.email}
          </p>
          <p>
            <strong>Massage:</strong>
            {submittedData.massage}
          </p>
        </div>
      )}
    </div>
  );
};
