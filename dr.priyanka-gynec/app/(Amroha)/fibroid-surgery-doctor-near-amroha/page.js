
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Fibroid Surgery Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a fibroid surgery doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, explains fibroid types, symptoms and uterus-preserving laparoscopic myomectomy.",
  keywords: [
    "fibroid surgery doctor near Amroha",
    "fibroid treatment near Amroha",
    "laparoscopic myomectomy near Amroha",
    "types of uterine fibroids",
    "fibroid symptoms diary",
    "uterine fibroid removal",
    "fibroid specialist near Amroha",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "heavy periods treatment",
    "uterus-preserving surgery",
    "fibroids and pregnancy",
    "3D laparoscopy Moradabad",
    "hysteroscopy Moradabad",
    "lady doctor for fibroids",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/fibroid-surgery-doctor-near-amroha",
  },
  openGraph: {
    title:
      "Fibroid Surgery Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Understand uterine fibroid types, symptoms and treatment options, including uterus-preserving laparoscopic myomectomy, with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/fibroid-surgery-doctor-near-amroha",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Fibroid Surgery Doctor in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fibroid Surgery Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about fibroid symptoms, types and uterus-preserving treatment options with Dr. Priyanka Pachauri, Moradabad.",
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
