
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Top Lady Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a top lady doctor near Sambhal? Dr. Priyanka Pachauri, Moradabad, offers private, respectful care for periods, PCOS, pregnancy, fertility and surgery.",
  keywords: [
    "top lady doctor near Sambhal",
    "best lady doctor near Sambhal",
    "female gynaecologist near Sambhal",
    "lady doctor for Sambhal patients",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "lady doctor for periods problem",
    "lady doctor for pregnancy",
    "PCOS doctor near Sambhal",
    "IVF specialist near Sambhal",
    "laparoscopic surgeon Moradabad",
    "women's clinic Moradabad",
    "lady doctor for menopause",
    "female doctor for women's health",
    "women's doctor near me",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/top-lady-doctor-near-sambhal",
  },
  openGraph: {
    title:
      "Top Lady Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Private, respectful gynaecology care in Moradabad for periods, PCOS, pregnancy, fertility and surgery.",
    url: "https://www.gynaecologistmoradabad.com/top-lady-doctor-near-sambhal",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri, gynaecologist in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Lady Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Private and respectful gynaecology care for periods, PCOS, pregnancy, fertility and surgery in Moradabad.",
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
