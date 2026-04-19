import { Metadata } from "next";
import Teams from ".";
import { ClientTeamsResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_TEAM } from "../utils/service/index.query";

type TeamPageProps = {
  searchParams?: Promise<{ limit?: string }>;
};

export const metadata: Metadata = {
  title: "Our Team",
};

export default async function TeamPage({ searchParams }: TeamPageProps) {
  const params = await searchParams;
  const limit = parseInt(params?.limit || "50", 10);

  const teamData = await fetchData<ClientTeamsResponse>({
    query: GET_TEAM,
    path: "data.getAllClientTeams",
    variables: {
      input: {
        limit,
        order: "desc",
        orderBy: "_id",
        skip: 0,
      },
    },
  });
  if (teamData.data.length <= 0) return;
  return <Teams teamData={teamData || {}} />;
}
