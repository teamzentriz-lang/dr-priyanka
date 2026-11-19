
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Best Gynaecologist near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for the best gynaecologist near Sambhal? Dr. Priyanka Pachauri, Moradabad, offers pregnancy care, PCOS, IVF and 3D laparoscopy. Book your consultation today.",
  keywords: [
    "best gynaecologist near Sambhal",
    "gynaecologist for Sambhal patients",
    "lady doctor near Sambhal",
    "gynaecologist in Moradabad",
    "Dr. Priyanka Pachauri",
    "IVF centre near Sambhal",
    "pregnancy care near Sambhal",
    "fertility specialist Moradabad",
    "laparoscopic surgeon near Sambhal",
    "PCOS treatment near Sambhal",
    "normal delivery doctor near Sambhal",
    "women's clinic Moradabad",
    "high-risk pregnancy doctor",
    "antenatal care Moradabad",
    "women's health specialist",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/best-gynaecologist-near-sambhal",
  },
  openGraph: {
    title:
      "Best Gynaecologist near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore pregnancy care, PCOS, IVF and 3D laparoscopy services with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/best-gynaecologist-near-sambhal",
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
      "Best Gynaecologist near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Pregnancy care, PCOS, IVF and 3D laparoscopy services with Dr. Priyanka Pachauri, Moradabad.",
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
