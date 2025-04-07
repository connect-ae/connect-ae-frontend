"use client";
import useForm from "@/app/hooks/useForm";
import React from "react";
import Input from "../forms/Input";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Textarea from "../forms/Textarea";
import { useMutation } from "@tanstack/react-query";
import { createContactRequest } from "@/app/api/api";

const ContactUsForm = () => {
  const initialFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const mutation = useMutation({
    mutationFn: createContactRequest,
    onSuccess: (data) => {
      alert("Thanks for contacting us!");
    },
    onError: (error) => {
      console.error("Contact failed:", error);
      alert("Submission failed. Please try again.");
    },
  });

  const { values, handleChange, handleSubmit } = useForm(
    initialFormValues,
    (data) => mutation.mutate(data)
  );

  return (
    <div className="lg:flex space-y-8 gap-8 md:*:flex-1">
      <Heading
        align="left"
        text="Get in Touch"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Consectetur, incidunt? Quod illum magni cum laboriosam error, aliquid iure omnis eum quasi cumque a, dolorum quaerat maxime, minima quia vel fuga!"
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-end">
        <div className="md:flex space-y-4 gap-4 w-full">
          <Input
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            size="medium"
            variant="default"
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            size="medium"
            variant="default"
            placeholder="Enter your email"
          />
        </div>

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          required
          size="medium"
          variant="default"
          placeholder="Enter your phone number"
        />

        <Textarea
          label="Message"
          name="message"
          value={values.message}
          onChange={handleChange}
          size="medium"
          variant="default"
          placeholder="Message"
        />

        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactUsForm;
