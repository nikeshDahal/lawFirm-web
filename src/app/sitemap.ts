import type { MetadataRoute } from "next";
import { fetchData } from "./utils/service";
import {
  GET_PUBLICATION_HEADER,
  GET_PRACTICE_HEADER,
  GET_TEAM,
} from "./utils/service/index.query";
import {
  ClientPublicationsResponse,
  ClientPracticeAreasResponse,
  ClientTeamsResponse,
} from "./utils/interface/index.query";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultVars = {
    input: {
      limit: 1000,
      order: "desc",
      orderBy: "createdAt",
      skip: 0,
    },
  };

  const [publications, practiceAreas, teams] = await Promise.all([
    fetchData<ClientPublicationsResponse>({
      query: GET_PUBLICATION_HEADER,
      path: "data.getAllClientPublications",
      variables: defaultVars,
      cache: "no-store",
    }).catch(() => null),
    fetchData<ClientPracticeAreasResponse>({
      query: GET_PRACTICE_HEADER,
      path: "data.findAllClientPracticeAreas",
      variables: defaultVars,
      cache: "no-store",
    }).catch(() => null),
    fetchData<ClientTeamsResponse>({
      query: GET_TEAM,
      path: "data.getAllClientTeams",
      variables: defaultVars,
      cache: "no-store",
    }).catch(() => null),
  ]);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://toplegaladvisers.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-area`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/teams`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const dynamicPublications: MetadataRoute.Sitemap =
    publications?.data?.map((pub) => ({
      url: `${baseUrl}/publications/${pub.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })) || [];

  const dynamicPracticeAreas: MetadataRoute.Sitemap =
    practiceAreas?.data?.map((pa) => ({
      url: `${baseUrl}/practice-area/${pa.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })) || [];

  const dynamicTeams: MetadataRoute.Sitemap =
    teams?.data?.map((team) => ({
      url: `${baseUrl}/teams/${team.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })) || [];

  return [
    ...staticRoutes,
    ...dynamicPublications,
    ...dynamicPracticeAreas,
    ...dynamicTeams,
  ];
}
