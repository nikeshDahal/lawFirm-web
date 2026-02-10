import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/internal/header";
import Footer from "@/components/internal/footer";
import { fetchData } from "./utils/service";
import { GET_CONTACT, GET_PRACTICE_HEADER } from "./utils/service/index.query";
import {
  ClientContactUsResponse,
  ClientPracticeAreasResponse,
} from "./utils/interface/index.query";

import localFont from "next/font/local";

const geist = localFont({
  src: "./Geist-VariableFont_wght.ttf",
  weight: "100 900",
});

export const revalidate = 5;
export const metadata: Metadata = {
  title: "Top Legal Advisers",
  description: "Attorneys At Law",
  keywords: [
    "Defense Lawyer",
    "Legal Advice",
    "Attorney at Law",
    "Civil Rights",
  ],
  category: "Legal Services",
};

const contactData = await fetchData<ClientContactUsResponse>({
  query: GET_CONTACT,
  path: "data.getClientContactUsPageContent",
  variables: {
    input: {
      limit: 50,
      order: "desc",
      orderBy: "_id",
      skip: 0,
    },
  },
});

const pubData = await fetchData<ClientPracticeAreasResponse>({
  query: GET_PRACTICE_HEADER,
  path: "data.findAllClientPracticeAreas",
  variables: {
    input: {
      limit: 50,
      order: "desc",
      orderBy: "_id",
      skip: 0,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-offwhite`}>
        <Header contactData={contactData} pubData={pubData} />
        {children}
        <Footer contactData={contactData} pubData={pubData} />
      </body>
    </html>
  );
}
