
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Gynaecologist Appointment for Sambhal Patients – Dr. Priyanka Pachauri",
  description:
    "Book a gynaecologist appointment in Moradabad as a Sambhal patient. Use our WhatsApp message template and checklist to book Dr. Priyanka Pachauri's clinic with ease.",
  keywords: [
    "gynaecologist appointment for Sambhal patients",
    "book gynaecologist appointment Sambhal",
    "gynaecologist appointment Moradabad",
    "WhatsApp appointment gynaecologist",
    "Dr. Priyanka Pachauri appointment",
    "how to book gynaecologist appointment",
    "first gynaecology appointment checklist",
    "fertility consultation appointment",
    "antenatal appointment Moradabad",
    "second opinion appointment gynaecologist",
    "women's clinic Moradabad",
    "appointment message template",
    "Dr. Priyanka Gynaec contact",
    "gynaecologist booking Sambhal",
    "gynaecologist in Moradabad",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/gynaecologist-appointment-for-sambhal-patients",
  },
  openGraph: {
    title:
      "Gynaecologist Appointment for Sambhal Patients – Dr. Priyanka Pachauri",
    description:
      "Find appointment booking guidance, a WhatsApp message template and a first-visit checklist for Dr. Priyanka Pachauri's clinic in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/gynaecologist-appointment-for-sambhal-patients",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Gynaecologist in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gynaecologist Appointment for Sambhal Patients – Dr. Priyanka Pachauri",
    description:
      "Use the WhatsApp message template and appointment checklist to plan your visit to Dr. Priyanka Pachauri's clinic in Moradabad.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Sambhal, Uttar Pradesh",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
