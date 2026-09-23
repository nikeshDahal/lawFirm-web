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
        orderBy: "createdAt",
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
    openGraph: {
      title: publicationSeoData?.metaData?.seoTags?.title,
      description: publicationSeoData?.metaData?.seoTags?.description,
      url: "/publications",
      images: [
        {
          url: "/logo-only.png",
        },
      ],
    },
  };
}

export default async function PublicationPage() {
  const publicationData = await fetchData<ClientPublicationsResponse>({
    query: GET_PUBLICATION,
    path: "data.getAllClientPublications",
    variables: {
      input: {
        limit: 9,
        order: "desc",
        orderBy: "createdAt",
        skip: 0,
      },
    },
  });

  return <Publications initialData={publicationData} />;
}
