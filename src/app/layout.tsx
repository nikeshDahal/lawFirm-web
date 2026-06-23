import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/internal/header";
import Footer from "@/components/internal/footer";
import { fetchData } from "./utils/service";
import {
  GET_BANNER,
  GET_CONTACT,
  GET_PRACTICE_HEADER,
} from "./utils/service/index.query";
import {
  ClientContactUsResponse,
  ClientLandingPageContent,
  ClientPracticeAreasResponse,
} from "./utils/interface/index.query";

import localFont from "next/font/local";
import FloatingContact from "@/components/internal/stickyWidget";
import SchemaMarkup from "@/components/internal/schema";
import Script from "next/script";

const seoData = await fetchData<ClientLandingPageContent>({
  path: `data.getClientLandingPageContent` as string,
  query: GET_BANNER,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  ...seoData.seoTags,
  keywords: seoData.seoTags?.tags?.split(",").map((tag) => tag.trim()),
  category: "Legal Services",
  openGraph: {
    title: seoData.seoTags.title,
    description: seoData.seoTags.description,
    images: [
      {
        url: "/logo-only.png",
      },
    ],
  },
};

const geist = localFont({
  src: "./Geist-VariableFont_wght.ttf",
  weight: "100 900",
});

export const revalidate = 10;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ZQnT069U-QYm2VVyMOp3SHN0yWsbQ_LnC_BWFyxesvQ"
        />

        <SchemaMarkup />

        {/* <!-- Google Tag Manager --> */}
        <script>
          {`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJHW47W8')
  `}
        </script>
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body className={`${geist.className} antialiased bg-offwhite`}>
        {/*<!-- Google Tag Manager (noscript)`*/}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJHW47W8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/*<!-- End Google Tag Manager (noscript) -->`*/}

        <Header contactData={contactData} pubData={pubData} />

        {children}

        <FloatingContact contactData={contactData} />

        <Footer contactData={contactData} pubData={pubData} />
      </body>
    </html>
  );
}
