"use client";
import useForm from "@/app/hooks/useForm";
import React from "react";
import Button from "../ui/Button";
import Input from "../forms/Input";
import Textarea from "../forms/Textarea";
import { PricingPlan } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/app/api/api";

type Props = {
  setIsOpen: Function;
  selectedPackage: PricingPlan | null;
};

const OrderForm = ({ setIsOpen, selectedPackage }: Props) => {
  const initialValues = {
    id: selectedPackage?.id,
    name: "",
    email: "",
    phone: "",
    tier: selectedPackage?.tier || "",
    package: `${selectedPackage?.title} - ${selectedPackage?.price}` || "",
    description: "",
  };

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      setIsOpen(false);
    },
    onError: (error) => {
      console.error("Order failed:", error);
      alert("Order submission failed. Please try again.");
    },
  });

  const { values, handleChange, handleSubmit } = useForm(
    initialValues,
    (data) => {
      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        description: data.description,
        package_id: data.id,
      };
      mutation.mutate(payload);
    }
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 overflow-auto">
        <Input
          autoFocus
          required
          name="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <Input
          name="email"
          required
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <Input
          name="phone"
          required
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <Input
          name="tier"
          label="Tier"
          type="text"
          readOnly
          value={values.tier}
          onChange={handleChange}
          placeholder="Enter your tier"
        />
        <Input
          className="md:col-span-2"
          name="package"
          label="Package"
          type="text"
          readOnly
          value={values.package}
          onChange={handleChange}
          placeholder="Enter your package"
        />
        <Textarea
          className="md:col-span-2"
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </div>
      <Button label="Order Now" type="submit" className="ml-auto" />
    </form>
  );
};

export default OrderForm;
