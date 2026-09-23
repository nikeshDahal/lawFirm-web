import type { MetadataRoute } from "next";
import { fetchData } from "./utils/service";
import {
  GET_PUBLICATION_HEADER,
  GET_PRACTICE_HEADER,
  GET_TEAM,
  GET_BANNER,
  GET_ABOUT,
  GET_CONTACT,
} from "./utils/service/index.query";
import {
  ClientPublicationsResponse,
  ClientPracticeAreasResponse,
  ClientTeamsResponse,
  ClientLandingPageContent,
  ClientAboutUsPageContent,
  ClientContactUsResponse,
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

  const [publications, practiceAreas, teams, banner, about, contact] =
    await Promise.all([
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
      fetchData<{ data: { getClientLandingPageContent: ClientLandingPageContent } }>({
        query: GET_BANNER,
        path: "",
        variables: defaultVars,
        cache: "no-store",
      }).catch(() => null),
      fetchData<{ data: { getClientAboutUsPageContent: ClientAboutUsPageContent } }>({
        query: GET_ABOUT,
        path: "",
        variables: defaultVars,
        cache: "no-store",
      }).catch(() => null),
      fetchData<{ data: { getClientContactUsPageContent: ClientContactUsResponse } }>({
        query: GET_CONTACT,
        path: "",
        variables: defaultVars,
        cache: "no-store",
      }).catch(() => null),
    ]);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://toplegaladvisers.com";

  const getLatestDate = (items: any[]) => {
    if (!items || items.length === 0) return undefined;
    const sorted = items
      .filter((item) => item.updatedAt)
      .map((item) => new Date(item.updatedAt).getTime())
      .sort((a, b) => b - a);
    return sorted.length > 0 ? new Date(sorted[0]) : undefined;
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: banner?.data?.getClientLandingPageContent?.updatedAt
        ? new Date(banner.data.getClientLandingPageContent.updatedAt)
        : undefined,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: about?.data?.getClientAboutUsPageContent?.updatedAt
        ? new Date(about.data.getClientAboutUsPageContent.updatedAt)
        : undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-area`,
      lastModified: getLatestDate(practiceAreas?.data || []),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: getLatestDate(publications?.data || []),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/teams`,
      lastModified: getLatestDate(teams?.data || []),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: contact?.data?.getClientContactUsPageContent?.updatedAt
        ? new Date(contact.data.getClientContactUsPageContent.updatedAt)
        : undefined,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const dynamicPublications: MetadataRoute.Sitemap =
    publications?.data?.map((pub) => ({
      url: `${baseUrl}/publications/${pub.slug}`,
      lastModified: pub.updatedAt ? new Date(pub.updatedAt) : undefined,
      changeFrequency: "monthly",
      priority: 0.6,
    })) || [];

  const dynamicPracticeAreas: MetadataRoute.Sitemap =
    practiceAreas?.data?.map((pa) => ({
      url: `${baseUrl}/practice-area/${pa.slug}`,
      lastModified: pa.updatedAt ? new Date(pa.updatedAt) : undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    })) || [];

  const dynamicTeams: MetadataRoute.Sitemap =
    teams?.data?.map((team) => ({
      url: `${baseUrl}/teams/${team.slug}`,
      lastModified: team.updatedAt ? new Date(team.updatedAt) : undefined,
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
