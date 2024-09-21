import { Page } from "@/components/ProjectIdPage";
import { getProjectDetail } from "@/lib/prisma/project/getDetail";

export default async function Project({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = await getProjectDetail(projectId);
  return <Page project={project} />;
}