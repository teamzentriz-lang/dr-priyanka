
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Women's Health Clinic near Sambhal – Dr. Priyanka Gynaec, Moradabad",
  description:
    "Looking for a women's health clinic near Sambhal? Dr. Priyanka Gynaec, Moradabad, offers gynaecology, pregnancy care, IVF and 3D laparoscopy. See a simple yearly health calendar.",
  keywords: [
    "women's health clinic near Sambhal",
    "women's clinic near Sambhal",
    "gynaecology clinic near Sambhal",
    "women's healthcare near Sambhal",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "yearly women's health checklist",
    "fertility and IVF clinic near Sambhal",
    "pregnancy care near Sambhal",
    "laparoscopic surgery near Sambhal",
    "how to choose a women's clinic",
    "PCOS treatment near Sambhal",
    "antenatal care near Sambhal",
    "paediatric care Moradabad",
    "women's health clinic Moradabad",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/womens-health-clinic-near-sambhal",
  },
  openGraph: {
    title:
      "Women's Health Clinic near Sambhal – Dr. Priyanka Gynaec, Moradabad",
    description:
      "Explore gynaecology, pregnancy care, IVF and 3D laparoscopy services, along with a simple yearly women's health calendar.",
    url: "https://www.gynaecologistmoradabad.com/womens-health-clinic-near-sambhal",
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
      "Women's Health Clinic near Sambhal – Dr. Priyanka Gynaec, Moradabad",
    description:
      "Gynaecology, pregnancy care, IVF and 3D laparoscopy information, plus a yearly women's health calendar.",
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
