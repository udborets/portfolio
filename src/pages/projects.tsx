import axios from "axios";
import Head from "next/head";
import { useQuery } from "react-query";

import { Page } from "@/templates/Page";

type Repo = {
  name: string;
  html_url: string;
  id: number;
  language: string;
}

const Projects = () => {
  const { data: repos } = useQuery({
    queryFn: async () => {
      const response = await axios.get("https://api.github.com/users/udborets/repos");
      const repos = response.data as Repo[];
      return repos;
    }
  })

  return (
    <>
      <Head>
        <title>/projects</title>
      </Head>
      <Page>
        <div className="text-white">{repos ? repos.map((repo) => <a href={repo.html_url} key={repo.name}>{repo.name}</a>) : ' '}</div>
      </Page>
    </>
  )
}

export default Projects