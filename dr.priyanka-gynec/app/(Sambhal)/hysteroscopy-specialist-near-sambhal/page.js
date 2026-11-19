
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Hysteroscopy Specialist near Sambhal – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a hysteroscopy specialist near Sambhal? Dr. Priyanka Pachauri, Moradabad, offers diagnostic hysteroscopy and polypectomy. See how it compares with other tests.",
  keywords: [
    "hysteroscopy specialist near Sambhal",
    "hysteroscopy doctor near Sambhal",
    "diagnostic hysteroscopy near Sambhal",
    "hysteroscopic polypectomy",
    "uterine polyp removal near Sambhal",
    "hysteroscopy vs ultrasound",
    "hysteroscopy vs HSG",
    "hysteroscopy for infertility",
    "hysteroscopy for abnormal bleeding",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "recurrent miscarriage evaluation",
    "intrauterine adhesions treatment",
    "fertility specialist Moradabad",
    "lady doctor for hysteroscopy",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/hysteroscopy-specialist-near-sambhal",
  },
  openGraph: {
    title:
      "Hysteroscopy Specialist near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore diagnostic hysteroscopy, uterine polyp removal and how hysteroscopy compares with other tests with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/hysteroscopy-specialist-near-sambhal",
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
      "Hysteroscopy Specialist near Sambhal – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about diagnostic hysteroscopy, polypectomy and comparisons with other uterine tests in Moradabad.",
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
