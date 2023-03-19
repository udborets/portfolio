import { Repo } from "@/models/GithubApi";

const ProjectItem = (repo: Repo) => {
  return (
    <div
      className="projectItem align-center justify-center flex"
    >
      <div
        className="projectItem-wrapper flex"
      >
        <span
          className="text-white"
        >
          {repo.name}
        </span>
      </div>
    </div>
  )
}

export default ProjectItem