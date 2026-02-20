import { Metadata } from "next";
import Publications from ".";
import { ClientPublicationsResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_PUBLICATION_SEO } from "../utils/service/index.query";

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

export const metadata: Metadata = {
  ...publicationSeoData.metaData.seoTags,
  keywords:
    publicationSeoData.metaData.seoTags.tags
      ?.split(",")
      .map((tag) => tag.trim()) || [],
};

export default async function PublicationPage() {
  return <Publications />;
}
