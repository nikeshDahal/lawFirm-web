import { Metadata } from "next";
import { ClientContactUsResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_CONTACT } from "../utils/service/index.query";
import ContactUs from ".";

const contactData = await fetchData<ClientContactUsResponse>({
  query: GET_CONTACT,
  path: "data.getClientContactUsPageContent",
});
export const metadata: Metadata = {
  ...contactData.seoTags,
  keywords: contactData.seoTags.tags,
};
export default async function ContactPage() {
  return <ContactUs contactData={contactData} />;
}
