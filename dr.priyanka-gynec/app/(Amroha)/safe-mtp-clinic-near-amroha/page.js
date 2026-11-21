
import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Safe MTP Clinic near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a safe, legal MTP clinic near Amroha? Learn how the law applies in different situations and plan aftercare. Confidential consultation with Dr. Priyanka Pachauri.",
  keywords: [
    "safe MTP clinic near Amroha",
    "MTP doctor near Amroha",
    "medical termination of pregnancy near Amroha",
    "safe abortion near Amroha",
    "legal abortion India",
    "MTP Act special situations",
    "MTP for minors India",
    "MTP after contraceptive failure",
    "MTP aftercare plan",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "confidential abortion consultation",
    "post-abortion care",
    "contraception counselling",
    "women's health clinic Moradabad",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/safe-mtp-clinic-near-amroha",
  },
  openGraph: {
    title: "Safe MTP Clinic near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about MTP legal considerations, confidential consultation and aftercare planning with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/safe-mtp-clinic-near-amroha",
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
    title: "Safe MTP Clinic near Amroha – Dr. Priyanka Pachauri",
    description:
      "Understand MTP legal considerations, confidential consultation and aftercare planning with Dr. Priyanka Pachauri in Moradabad.",
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
