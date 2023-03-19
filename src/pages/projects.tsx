import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import { useQuery } from "react-query";

import ProjectItem from "@/components/ProjectItem";
import { Repo } from "@/models/GithubApi";
import { Page } from "@/templates/Page";

const Projects = () => {
  const { data: repos } = useQuery({
    queryFn: async () => {
      const response: AxiosResponse<Repo[]> = await axios.get("https://api.github.com/users/udborets/repos");
      const repos = response.data
      return repos.filter((repo) => repo.name !== 'udborets');
    }
  })

  return (
    <>
      <Head>
        <title>udborets/projects</title>
      </Head>
      <Page>
        <div className="projects grid grid-cols-3 gap-[10px] flex-wrap">
          {repos
            ? repos.map((repo) => (
              <ProjectItem key={repo.id} {...repo} />
            ))
            : <></>}
        </div>
      </Page>
    </>
  )
}

export default Projects