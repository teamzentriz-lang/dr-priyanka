
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Safe MTP Clinic near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a safe, legal MTP clinic near Sambhal? Learn myths and facts, consent and what to ask. Confidential consultation with Dr. Priyanka Pachauri, Moradabad.",
  keywords: [
    "safe MTP clinic near Sambhal",
    "MTP doctor near Sambhal",
    "medical termination of pregnancy near Sambhal",
    "safe abortion near Sambhal",
    "legal abortion India",
    "MTP Act India",
    "abortion myths and facts",
    "MTP consent and documents",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "confidential abortion consultation",
    "post-abortion care",
    "contraception counselling",
    "miscarriage management",
    "women's health clinic Moradabad",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/safe-mtp-clinic-near-sambhal",
  },
  openGraph: {
    title:
      "Safe MTP Clinic near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about MTP myths and facts, consent, legal requirements and confidential consultation with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/safe-mtp-clinic-near-sambhal",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – MTP Consultation in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Safe MTP Clinic near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Understand MTP myths, consent and legal requirements. Confidential consultation with Dr. Priyanka Pachauri, Moradabad.",
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
