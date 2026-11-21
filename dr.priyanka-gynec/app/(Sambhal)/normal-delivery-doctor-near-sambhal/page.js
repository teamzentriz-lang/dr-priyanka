
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Normal Delivery Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a normal delivery doctor near Sambhal? Dr. Priyanka Pachauri, Moradabad, supports normal vaginal delivery where safe. Learn about labour fears and planning.",
  keywords: [
    "normal delivery doctor near Sambhal",
    "normal delivery specialist near Sambhal",
    "vaginal delivery doctor near Sambhal",
    "pregnancy doctor near Sambhal",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "normal delivery Moradabad",
    "labour fears and facts",
    "birth preferences with doctor",
    "signs of labour",
    "antenatal care near Sambhal",
    "high-risk pregnancy doctor",
    "lady doctor for delivery",
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
      "https://www.gynaecologistmoradabad.com/normal-delivery-doctor-near-sambhal",
  },
  openGraph: {
    title:
      "Normal Delivery Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about labour preparation, birth preferences and vaginal delivery when medically appropriate with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/normal-delivery-doctor-near-sambhal",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Normal Delivery Doctor in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Normal Delivery Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore labour preparation, birth preferences and vaginal delivery when safe with Dr. Priyanka Pachauri, Moradabad.",
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
