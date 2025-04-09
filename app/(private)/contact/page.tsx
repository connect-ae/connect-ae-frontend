"use client";
import ContactInfoItem from "@/app/components/feedback/ContactInfoItem";
import ContactUsForm from "@/app/components/feedback/ContactUsForm";
import HeadSection from "@/app/components/feedback/HeadSection";
import Section from "@/app/components/layout/Section";
import Heading from "@/app/components/ui/Heading";
import { CONTACT_DATA } from "@/app/config/constant";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact us", href: "/contact", active: true },
  ];
  return (
    <>
      <HeadSection title="Contact us" breadcrumbs={breadcrumbs} />
      <Section background>
        <ContactUsForm />
      </Section>
      <Section>
        <Heading
          text="Contact Information"
          description="Reach out to us to learn more about how we can assist you. Whether you need support, have questions, or want to explore partnership opportunities, our team is here to help."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
          <ContactInfoItem
            icon={<MapPin size={25} />}
            title="Address"
            content={CONTACT_DATA.address}
          />
          {/* <ContactInfoItem
            icon={<Phone size={25} />}
            title="Phone"
            content={CONTACT_DATA.phone}
          /> */}
          <ContactInfoItem
            icon={<Envelope size={25} />}
            title="Email"
            content={CONTACT_DATA.email}
          />
        </div>
      </Section>
    </>
  );
};

export default Contact;
