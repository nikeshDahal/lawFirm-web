import { Metadata } from "next";
import { ClientContactUsResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_CONTACT } from "../utils/service/index.query";
import ContactUs from ".";

export async function generateMetadata(): Promise<Metadata> {
  const contactData = await fetchData<ClientContactUsResponse>({
    query: GET_CONTACT,
    path: "data.getClientContactUsPageContent",
  });
  return {
    alternates: {
      canonical: "/contact-us",
    },
    ...contactData?.seoTags,
    keywords:
      contactData?.seoTags?.tags?.split(",").map((tag) => tag.trim()) || [],
    openGraph: {
      title: contactData?.seoTags?.title,
      description: contactData?.seoTags?.description,
      url: "/contact-us",
      images: [
        {
          url: "/logo-only.png",
        },
      ],
    },
  };
}
export default async function ContactPage() {
  const contactData = await fetchData<ClientContactUsResponse>({
    query: GET_CONTACT,
    path: "data.getClientContactUsPageContent",
  });
  return <ContactUs contactData={contactData} />;
}
