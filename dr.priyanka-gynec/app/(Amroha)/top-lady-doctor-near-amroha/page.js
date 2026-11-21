
import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Top Lady Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a top lady doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, offers private, respectful care for periods, PCOS, pregnancy and fertility. Book today.",
  keywords: [
    "top lady doctor near Amroha",
    "best lady doctor near Amroha",
    "female gynaecologist near Amroha",
    "lady doctor for Amroha patients",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "lady doctor for periods problem",
    "lady doctor for pregnancy",
    "PCOS doctor near Amroha",
    "IVF specialist near Amroha",
    "laparoscopic surgeon Moradabad",
    "women's clinic Moradabad",
    "why women delay gynaecologist visit",
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
      "https://www.gynaecologistmoradabad.com/top-lady-doctor-near-amroha",
  },
  openGraph: {
    title: "Top Lady Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Private, respectful women's healthcare for periods, PCOS, pregnancy and fertility with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/top-lady-doctor-near-amroha",
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
    title: "Top Lady Doctor near Amroha – Dr. Priyanka Pachauri",
    description:
      "Explore private, respectful women's healthcare in Moradabad for periods, PCOS, pregnancy and fertility.",
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
