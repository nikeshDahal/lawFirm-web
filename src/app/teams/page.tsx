import { Metadata } from "next";
import Teams from ".";
import { ClientTeamsResponse } from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { GET_TEAM } from "../utils/service/index.query";

type TeamPageProps = {
  limit?: number; // optional, default value
};

export const metadata: Metadata = {
  title: "Our Team",
};

export default async function TeamPage({ limit = 50 }: TeamPageProps) {
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
