import React, { useState, useEffect } from "react";

const useForm = (
  initialValues: Record<string, string>,
  onSubmit: (data: Record<string, string>) => void
) => {
  const [values, setValues] = useState(initialValues);

  // Sync values when initialValues changes
  useEffect(() => {
    setValues(initialValues);
  }, [JSON.stringify(initialValues)]);

  // Handle input change
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
    reset();
  };

  // Reset form to initial values
  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, handleSubmit, reset, setValues };
};

export default useForm;
