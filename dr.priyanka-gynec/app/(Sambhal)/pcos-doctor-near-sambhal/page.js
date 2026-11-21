
import React from "react";
import Content from "./Content";

export const metadata = {
  title: "PCOS Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a PCOS doctor near Sambhal? Dr. Priyanka Pachauri, Moradabad, explains PCOS tests, myths and treatment for periods, weight, acne and fertility.",
  keywords: [
    "PCOS doctor near Sambhal",
    "PCOS specialist near Sambhal",
    "PCOS treatment near Sambhal",
    "PCOD doctor near Sambhal",
    "PCOS tests explained",
    "PCOS myths and facts",
    "irregular periods treatment near Sambhal",
    "PCOS and infertility",
    "ovulation induction",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "PCOS weekly routine",
    "PCOS diet and lifestyle",
    "fertility specialist Moradabad",
    "lady doctor for PCOS",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/pcos-doctor-near-sambhal",
  },
  openGraph: {
    title: "PCOS Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Understand PCOS tests, common myths and treatment options for periods, weight, acne and fertility with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/pcos-doctor-near-sambhal",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – PCOS Doctor in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCOS Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about PCOS tests, myths and treatment options for periods, weight, acne and fertility with Dr. Priyanka Pachauri, Moradabad.",
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
