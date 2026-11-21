
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Best Gynaecologist near Amroha – Your First 90 Days of Care | Dr. Priyanka Pachauri",
  description:
    "Choosing the best gynaecologist near Amroha? See what the first 90 days of care look like with Dr. Priyanka Pachauri, Moradabad, for periods, fertility and pregnancy.",
  keywords: [
    "best gynaecologist near Amroha",
    "gynaecologist for Amroha patients",
    "first visit gynaecologist what to expect",
    "gynaecologist treatment journey",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "lady doctor near Amroha",
    "PCOS treatment near Amroha",
    "fertility specialist near Amroha",
    "pregnancy care near Amroha",
    "laparoscopic surgeon Moradabad",
    "IVF centre Moradabad",
    "women's clinic Moradabad",
    "antenatal care near Amroha",
    "women's health specialist",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/best-gynaecologist-near-amroha",
  },
  openGraph: {
    title:
      "Best Gynaecologist near Amroha – Your First 90 Days of Care | Dr. Priyanka Pachauri",
    description:
      "Explore what the first 90 days of gynaecological care may involve for periods, fertility and pregnancy with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/best-gynaecologist-near-amroha",
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
    title:
      "Best Gynaecologist near Amroha – Your First 90 Days of Care | Dr. Priyanka Pachauri",
    description:
      "Learn what to expect during the first 90 days of care for periods, fertility and pregnancy with Dr. Priyanka Pachauri, Moradabad.",
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
