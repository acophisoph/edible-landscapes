import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function Gallery() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Project Gallery</h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[300px]" />
            ))
          : projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </main>
  );
}
