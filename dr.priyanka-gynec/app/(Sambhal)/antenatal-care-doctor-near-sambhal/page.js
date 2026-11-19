
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Antenatal Care Doctor near Sambhal – Family Guide | Dr. Priyanka Pachauri",
  description:
    "Looking for an antenatal care doctor near Sambhal? A family guide to pregnancy visits, scans and support, with Dr. Priyanka Pachauri, Moradabad. Book your first visit.",
  keywords: [
    "antenatal care doctor near Sambhal",
    "pregnancy doctor near Sambhal",
    "antenatal checkup near Sambhal",
    "prenatal care near Sambhal",
    "pregnancy care for families",
    "husband role in pregnancy",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "pregnancy month by month guide",
    "high-risk pregnancy doctor",
    "normal delivery doctor near Sambhal",
    "3D 4D ultrasound Moradabad",
    "pregnancy warning signs",
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
      "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-sambhal",
  },
  openGraph: {
    title:
      "Antenatal Care Doctor near Sambhal – Family Guide | Dr. Priyanka Pachauri",
    description:
      "A family guide to pregnancy checkups, scans and support with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-sambhal",
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
      "Antenatal Care Doctor near Sambhal – Family Guide | Dr. Priyanka Pachauri",
    description:
      "Learn about pregnancy visits, scans and family support with Dr. Priyanka Pachauri, Moradabad.",
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
