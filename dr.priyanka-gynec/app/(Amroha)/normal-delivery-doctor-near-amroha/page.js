
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Normal Delivery Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a normal delivery doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, supports normal delivery where safe. Use our 8-week countdown to prepare.",
  keywords: [
    "normal delivery doctor near Amroha",
    "normal delivery specialist near Amroha",
    "vaginal delivery doctor near Amroha",
    "pregnancy doctor near Amroha",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "normal delivery Moradabad",
    "last 8 weeks of pregnancy checklist",
    "labour preparation",
    "hospital bag checklist",
    "signs of labour",
    "antenatal care near Amroha",
    "high-risk pregnancy doctor",
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
      "https://www.gynaecologistmoradabad.com/normal-delivery-doctor-near-amroha",
  },
  openGraph: {
    title:
      "Normal Delivery Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Prepare for labour with antenatal guidance, an 8-week countdown and delivery planning with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/normal-delivery-doctor-near-amroha",
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
    title: "Normal Delivery Doctor near Amroha – Dr. Priyanka Pachauri",
    description:
      "Explore labour preparation, antenatal guidance and delivery planning with Dr. Priyanka Pachauri in Moradabad.",
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
