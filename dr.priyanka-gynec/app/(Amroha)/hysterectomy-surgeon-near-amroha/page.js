
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Hysterectomy Surgeon near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a hysterectomy surgeon near Amroha? Dr. Priyanka Pachauri, Moradabad, explains types of hysterectomy, the ovaries question and life afterwards.",
  keywords: [
    "hysterectomy surgeon near Amroha",
    "hysterectomy doctor near Amroha",
    "laparoscopic hysterectomy near Amroha",
    "types of hysterectomy",
    "total vs subtotal hysterectomy",
    "hysterectomy and ovaries",
    "life after hysterectomy",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "second opinion hysterectomy",
    "alternatives to hysterectomy",
    "hysterectomy long-term health",
    "uterus removal surgery near Amroha",
    "laparoscopic surgeon Moradabad",
    "lady doctor for hysterectomy",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/hysterectomy-surgeon-near-amroha",
  },
  openGraph: {
    title:
      "Hysterectomy Surgeon near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Understand hysterectomy types, decisions about the ovaries and life after surgery with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/hysterectomy-surgeon-near-amroha",
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
    title: "Hysterectomy Surgeon near Amroha – Dr. Priyanka Pachauri",
    description:
      "Explore hysterectomy options, the ovaries question and recovery considerations with Dr. Priyanka Pachauri in Moradabad.",
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
