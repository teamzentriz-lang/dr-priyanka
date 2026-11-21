
import React from "react";
import Content from "./Content";

export const metadata = {
  title: "PCOS Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a PCOS doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, explains PCOS at every life stage, from teenage years to menopause, with personalised care.",
  keywords: [
    "PCOS doctor near Amroha",
    "PCOS specialist near Amroha",
    "PCOS treatment near Amroha",
    "PCOD doctor near Amroha",
    "PCOS in teenagers",
    "PCOS and pregnancy",
    "PCOS after 35",
    "PCOS and menopause",
    "irregular periods treatment near Amroha",
    "ovulation induction",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
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
      "https://www.gynaecologistmoradabad.com/pcos-doctor-near-amroha",
  },
  openGraph: {
    title: "PCOS Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Understand PCOS at different life stages and explore personalised care with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/pcos-doctor-near-amroha",
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
    title: "PCOS Doctor near Amroha – Dr. Priyanka Pachauri",
    description:
      "Explore PCOS care across different life stages with Dr. Priyanka Pachauri in Moradabad.",
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
