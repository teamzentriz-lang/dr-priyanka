
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Postnatal Care Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a postnatal care doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, helps with recovery, hair fall, pelvic floor, feeding and newborn care.",
  keywords: [
    "postnatal care doctor near Amroha",
    "postpartum checkup near Amroha",
    "after delivery checkup Amroha",
    "postnatal doctor near Amroha",
    "fourth trimester care",
    "postpartum hair fall",
    "pelvic floor after delivery",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "newborn care Moradabad",
    "breastfeeding support",
    "postpartum exercise and intimacy",
    "C-section recovery care",
    "postnatal depression help",
    "lady doctor for postnatal care",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/postnatal-care-doctor-near-amroha",
  },
  openGraph: {
    title:
      "Postnatal Care Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Get guidance on postpartum recovery, pelvic floor health, feeding and newborn care with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/postnatal-care-doctor-near-amroha",
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
    title: "Postnatal Care Doctor near Amroha – Dr. Priyanka Pachauri",
    description:
      "Learn about postpartum recovery, pelvic floor care, feeding and newborn care with Dr. Priyanka Pachauri in Moradabad.",
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
