import { Metadata } from "next";
import About from ".";
import { ClientAboutUsPageContent } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_ABOUT } from "../utils/service/index.query";

const seoData = await fetchData<ClientAboutUsPageContent>({
  query: GET_ABOUT,
  path: "data.getClientAboutUsPageContent",
});
export const metadata: Metadata = {
  alternates: {
    canonical: "/about-us",
  },
  ...seoData.seoTags,
  keywords: seoData.seoTags?.tags?.split(",").map((tag) => tag.trim()),
};
export default async function AboutPage() {
  const aboutData = await fetchData<ClientAboutUsPageContent>({
    query: GET_ABOUT,
    path: "data.getClientAboutUsPageContent",
    cache: "no-store",
  });

  return <About aboutData={aboutData} />;
}
