import { Github, Globe } from "lucide-react";
import { Project } from "@/types";
import { projects, getProjectIcon } from "@/constants/projects";
import { getTechIcon, TECH_ICONS } from "@/constants/tech-icons";
import PreviewCard from "@/components/PreviewCard";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project: Project, index: number) => (
          <PreviewCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={getProjectIcon(project.type)}
            techStack={project.tags.map((tag) => ({
              icon: getTechIcon(tag as keyof typeof TECH_ICONS),
              label: tag,
            }))}
            actions={
              project.links
                ? [
                    ...(project.links.demo
                      ? [
                          {
                            icon: <Globe className="size-4" />,
                            label: "Visit Site",
                            href: project.links.demo,
                          },
                        ]
                      : []),
                    ...(project.links.github
                      ? [
                          {
                            icon: <Github className="size-4" />,
                            label: "Source Code",
                            href: project.links.github,
                          },
                        ]
                      : []),
                  ]
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}
