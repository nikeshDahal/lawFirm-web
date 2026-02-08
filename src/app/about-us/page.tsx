import About from ".";
import { ClientAboutUsPageContent } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_ABOUT } from "../utils/service/index.query";

export default async function AboutPage() {
  const aboutData = await fetchData<ClientAboutUsPageContent>({
    query: GET_ABOUT,
    path: "data.getClientAboutUsPageContent",
  });

  return <About aboutData={aboutData} />;
}
