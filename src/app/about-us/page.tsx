import { Metadata } from "next";
import About from ".";
import { ClientAboutUsPageContent } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_ABOUT } from "../utils/service/index.query";

const aboutData = await fetchData<ClientAboutUsPageContent>({
  query: GET_ABOUT,
  path: "data.getClientAboutUsPageContent",
});
export const metadata: Metadata = {
  ...aboutData.seoTags,
  keywords: aboutData.seoTags.tags,
};
export default async function AboutPage() {
  return <About aboutData={aboutData} />;
}
