export const metadata = {
  title: "About IntraWeb Technologies | AI-Powered Web Development",
  description: "IntraWeb Technologies combines human expertise with AI capabilities to build high-performance web solutions for startups and enterprises.",
  openGraph: {
    title: "About IntraWeb Technologies",
    description: "We build high-performance web solutions that blend innovative design with rock-solid technology.",
    type: "website",
    url: "https://intrawebtech.com/about",
    images: [
      {
        url: "https://intrawebtech.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IntraWeb Technologies",
      },
    ],
  },
};

import AboutClient from "./AboutClient";

export default function AboutPage() {
  return <AboutClient />;
} 