
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Gynaecologist Appointment for Amroha Patients – Dr. Priyanka Pachauri",
  description:
    "Book a gynaecologist appointment in Moradabad as an Amroha patient. Find the right booking for your situation and avoid common mistakes with Dr. Priyanka Pachauri.",
  keywords: [
    "gynaecologist appointment for Amroha patients",
    "book gynaecologist appointment Amroha",
    "gynaecologist appointment Moradabad",
    "Dr. Priyanka Pachauri appointment",
    "how to book gynaecologist appointment",
    "first gynaecology appointment",
    "couple fertility consultation appointment",
    "antenatal appointment Moradabad",
    "urgent gynaecologist appointment",
    "common appointment booking mistakes",
    "women's clinic Moradabad",
    "Dr. Priyanka Gynaec contact",
    "WhatsApp appointment gynaecologist",
    "gynaecologist booking Amroha",
    "gynaecologist in Moradabad",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/gynaecologist-appointment-for-amroha-patients",
  },
  openGraph: {
    title:
      "Gynaecologist Appointment for Amroha Patients – Dr. Priyanka Pachauri",
    description:
      "Find appointment booking guidance for Amroha patients visiting Dr. Priyanka Pachauri's gynaecology clinic in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/gynaecologist-appointment-for-amroha-patients",
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
      "Gynaecologist Appointment for Amroha Patients – Dr. Priyanka Pachauri",
    description:
      "Plan your gynaecology appointment in Moradabad with booking guidance from Dr. Priyanka Pachauri.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Amroha, Uttar Pradesh",
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
