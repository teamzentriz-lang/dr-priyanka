
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Laparoscopic Surgeon near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a laparoscopic surgeon near Sambhal? Dr. Priyanka Pachauri, Moradabad, offers 3D keyhole surgery for cysts, fibroids and endometriosis. A procedure-by-procedure guide.",
  keywords: [
    "laparoscopic surgeon near Sambhal",
    "laparoscopic gynae surgeon near Sambhal",
    "3D laparoscopy near Sambhal",
    "keyhole surgery gynaecology",
    "laparoscopic hysterectomy near Sambhal",
    "laparoscopic myomectomy",
    "laparoscopic cystectomy",
    "endometriosis surgery",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "questions to ask surgeon",
    "fibroid surgery near Sambhal",
    "ovarian cyst removal near Sambhal",
    "hysteroscopy Moradabad",
    "minimally invasive gynaecological surgery",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/laparoscopic-surgeon-near-sambhal",
  },
  openGraph: {
    title:
      "Laparoscopic Surgeon near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore 3D keyhole surgery options for ovarian cysts, fibroids and endometriosis with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-surgeon-near-sambhal",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Laparoscopic Surgeon in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Laparoscopic Surgeon near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about keyhole surgery options for cysts, fibroids and endometriosis with Dr. Priyanka Pachauri, Moradabad.",
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
