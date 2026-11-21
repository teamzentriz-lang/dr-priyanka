
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Laparoscopic Surgeon near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a laparoscopic surgeon near Amroha? Dr. Priyanka Pachauri, Moradabad, offers 3D keyhole surgery. See common fears answered and a recovery timeline.",
  keywords: [
    "laparoscopic surgeon near Amroha",
    "laparoscopic gynae surgeon near Amroha",
    "3D laparoscopy near Amroha",
    "keyhole surgery gynaecology",
    "laparoscopic surgery recovery timeline",
    "laparoscopy fears and myths",
    "laparoscopic hysterectomy near Amroha",
    "laparoscopic myomectomy",
    "laparoscopic cystectomy",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "endometriosis surgery",
    "hysteroscopy Moradabad",
    "minimally invasive gynaecological surgery",
    "fibroid surgery near Amroha",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/laparoscopic-surgeon-near-amroha",
  },
  openGraph: {
    title:
      "Laparoscopic Surgeon near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore minimally invasive gynaecological surgery, common concerns and recovery expectations with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-surgeon-near-amroha",
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
    title: "Laparoscopic Surgeon near Amroha – Dr. Priyanka Pachauri",
    description:
      "Learn about keyhole gynaecological surgery, common concerns and recovery timelines with Dr. Priyanka Pachauri in Moradabad.",
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
