
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Antenatal Care Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for an antenatal care doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, explains pregnancy tests in plain words and offers trimester-wise care. Book your visit.",
  keywords: [
    "antenatal care doctor near Amroha",
    "pregnancy doctor near Amroha",
    "antenatal checkup near Amroha",
    "prenatal care near Amroha",
    "pregnancy blood tests explained",
    "antenatal tests list",
    "working women pregnancy care",
    "second pregnancy care",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "high-risk pregnancy doctor",
    "normal delivery doctor near Amroha",
    "3D 4D ultrasound Moradabad",
    "maternity care Moradabad",
    "safe motherhood",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-amroha",
  },
  openGraph: {
    title:
      "Antenatal Care Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Understand pregnancy tests and trimester-wise antenatal care with Dr. Priyanka Pachauri at her Moradabad clinic.",
    url: "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-amroha",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Antenatal Care Doctor in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Antenatal Care Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about pregnancy tests and trimester-wise antenatal care with Dr. Priyanka Pachauri in Moradabad.",
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
