
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Postnatal Care Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a postnatal care doctor near Sambhal? Dr. Priyanka Pachauri, Moradabad, offers recovery care, breastfeeding help and newborn care. See the 6-week recovery timeline.",
  keywords: [
    "postnatal care doctor near Sambhal",
    "postpartum checkup near Sambhal",
    "after delivery checkup Sambhal",
    "postnatal doctor near Sambhal",
    "six week postnatal recovery",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "newborn care Moradabad",
    "breastfeeding support",
    "postpartum recovery timeline",
    "C-section recovery care",
    "normal delivery recovery",
    "postnatal depression help",
    "baby vaccination Moradabad",
    "lady doctor for postnatal care",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/postnatal-care-doctor-near-sambhal",
  },
  openGraph: {
    title:
      "Postnatal Care Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about post-delivery recovery, breastfeeding support and newborn care with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/postnatal-care-doctor-near-sambhal",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Postnatal Care Doctor in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Postnatal Care Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Post-delivery recovery care, breastfeeding guidance and newborn care information with Dr. Priyanka Pachauri, Moradabad.",
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
