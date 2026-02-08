import PraticeAreaOverview from ".";
import { ClientPracticeAreasResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_PRACTICE } from "../utils/service/index.query";

type PracticePageProps = {
  limit?: number; // optional, default value
};

export default async function PracticePage({ limit = 50 }: PracticePageProps) {
  const practiceData = await fetchData<ClientPracticeAreasResponse>({
    query: GET_PRACTICE,
    path: "data.findAllClientPracticeAreas",
    variables: {
      input: {
        limit,
        order: "desc",
        orderBy: "_id",
        skip: 0,
      },
    },
  });
  return <PraticeAreaOverview practiceData={practiceData} />;
}
