import { Metadata } from "next";
import Publications from ".";
import { ClientPublicationsResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_PUBLICATION, GET_PUBLICATION_SEO } from "../utils/service/index.query";

export async function generateMetadata(): Promise<Metadata> {
  const publicationSeoData = await fetchData<ClientPublicationsResponse>({
    query: GET_PUBLICATION_SEO,
    path: "data.getAllClientPublications",
    variables: {
      input: {
        limit: 3,
        order: "desc",
        orderBy: "_id",
        skip: 0,
      },
    },
  });

  return {
    alternates: {
      canonical: "/publications",
    },
    ...publicationSeoData?.metaData?.seoTags,
    keywords:
      publicationSeoData?.metaData?.seoTags?.tags
        ?.split(",")
        .map((tag) => tag.trim()) || [],
  };
}

export default async function PublicationPage() {
  const publicationData = await fetchData<ClientPublicationsResponse>({
    query: GET_PUBLICATION,
    path: "data.getAllClientPublications",
    variables: {
      input: {
        limit: 50,
        order: "desc",
        orderBy: "_id",
        skip: 0,
      },
    },
  });

  return <Publications initialData={publicationData} />;
}
