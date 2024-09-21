import { prisma } from "../prisma";

export async function getProjectDetail(id: number) {
  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });
  return project;
}
