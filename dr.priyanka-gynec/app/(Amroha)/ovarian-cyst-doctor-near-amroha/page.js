
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Ovarian Cyst Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for an ovarian cyst doctor near Amroha? Dr. Priyanka Pachauri, Moradabad, explains cysts at every life stage and offers fertility-preserving laparoscopic cystectomy.",
  keywords: [
    "ovarian cyst doctor near Amroha",
    "ovarian cyst treatment near Amroha",
    "ovarian cyst surgeon near Amroha",
    "laparoscopic cystectomy near Amroha",
    "ovarian cyst in pregnancy",
    "ovarian cyst in teenagers",
    "ovarian cyst after menopause",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "3D laparoscopy Moradabad",
    "endometrioma treatment",
    "PCOS and ovarian cyst",
    "ovarian cyst symptoms",
    "fertility-preserving surgery",
    "lady doctor for ovarian cyst",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/ovarian-cyst-doctor-near-amroha",
  },
  openGraph: {
    title:
      "Ovarian Cyst Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about ovarian cysts at different life stages and explore treatment options, including fertility-preserving surgery, with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/ovarian-cyst-doctor-near-amroha",
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
    title: "Ovarian Cyst Doctor near Amroha – Dr. Priyanka Pachauri",
    description:
      "Explore ovarian cyst symptoms and treatment options, including fertility-preserving approaches, with Dr. Priyanka Pachauri in Moradabad.",
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
