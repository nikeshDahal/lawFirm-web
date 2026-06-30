import { Metadata } from "next";
import PraticeAreaOverview from ".";
import { ClientPracticeAreasResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_PRACTICE, GET_PRACTICE_SEO } from "../utils/service/index.query";

type PracticePageProps = {
  searchParams?: Promise<{ limit?: string }>;
};

const practiceSeoData = await fetchData<ClientPracticeAreasResponse>({
  query: GET_PRACTICE_SEO,
  path: "data.findAllClientPracticeAreas",
  variables: {
    input: {
      limit: 3,
      order: "desc",
      orderBy: "_id",
      skip: 0,
    },
  },
});
export const metadata: Metadata = {
  alternates: {
    canonical: "/practice-area",
  },
  ...practiceSeoData.metaData.seoTags,
  keywords:
    practiceSeoData.metaData.seoTags?.tags
      ?.split(",")
      .map((tag) => tag.trim()) || [],
};

export default async function PracticePage({ searchParams }: PracticePageProps) {
  const params = await searchParams;
  let limit = parseInt(params?.limit || "50", 10);

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
