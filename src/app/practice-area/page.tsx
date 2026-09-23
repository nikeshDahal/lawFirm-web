import { Metadata } from "next";
import PraticeAreaOverview from ".";
import { ClientPracticeAreasResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_PRACTICE, GET_PRACTICE_SEO } from "../utils/service/index.query";

type PracticePageProps = {
  searchParams?: Promise<{ limit?: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const practiceSeoData = await fetchData<ClientPracticeAreasResponse>({
    query: GET_PRACTICE_SEO,
    path: "data.findAllClientPracticeAreas",
    variables: {
      input: {
        limit: 3,
        order: "desc",
        orderBy: "createdAt",
        skip: 0,
      },
    },
  });

  return {
    alternates: {
      canonical: "/practice-area",
    },
    ...practiceSeoData?.metaData?.seoTags,
    keywords:
      practiceSeoData?.metaData?.seoTags?.tags
        ?.split(",")
        .map((tag) => tag.trim()) || [],
    openGraph: {
      title: practiceSeoData?.metaData?.seoTags?.title,
      description: practiceSeoData?.metaData?.seoTags?.description,
      url: "/practice-area",
      images: [
        {
          url: "/logo-only.png",
        },
      ],
    },
  };
}

export default async function PracticePage({ searchParams }: PracticePageProps) {
  const params = await searchParams;
  let limit = parseInt(params?.limit || "9", 10);

  const practiceData = await fetchData<ClientPracticeAreasResponse>({
    query: GET_PRACTICE,
    path: "data.findAllClientPracticeAreas",
    variables: {
      input: {
        limit,
        order: "desc",
        orderBy: "createdAt",
        skip: 0,
      },
    },
  });
  return <PraticeAreaOverview practiceData={practiceData} />;
}
