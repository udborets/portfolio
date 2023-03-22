import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useQuery } from "react-query";

import ProjectItem from "@/components/ProjectItem";
import { useNavbar } from "@/hooks/useNavbar";
import { Repo } from "@/models/GithubApi";
import { Page } from "@/templates/Page";

const Projects = () => {
  const { setIsActive } = useNavbar();
  useEffect(() => {
    setIsActive(false);
  }, [])
  const repos = useQuery({
    queryFn: async () => {
      const response: AxiosResponse<Repo[]> = await axios.get("https://api.github.com/users/udborets/repos");
      const repos = response.data;
      return repos
        .filter((repo) => repo.name !== 'udborets')
        .sort((repo1, repo2) => new Date(repo2.created_at).getTime() - new Date(repo1.created_at).getTime());
    }
  })

  return (
    <>
      <Head>
        <title>udborets/projects</title>
      </Head>
      <Page movingFromTop className="xl:justify-center">
        <div className="projects grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-[10px] flex-wrap">
          {repos.data
            ? repos.data.map((repo, i) => (
              <ProjectItem key={repo.id} repo={repo} transitionDelayIndex={i + 1} />
            ))
            : <></>}
        </div>
      </Page>
    </>
  )
}

export default Projects