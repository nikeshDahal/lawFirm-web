import { ClientLandingPageContent } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_BANNER } from "@/app/utils/service/index.query";
import VideoHeroBanner from "./videoIndex";

export default async function HeroPage() {
  const data = await fetchData<ClientLandingPageContent>({
    path: `data.getClientLandingPageContent`,
    query: GET_BANNER,
    cache: "no-store",
  });

  return <VideoHeroBanner data={data} />;
}
