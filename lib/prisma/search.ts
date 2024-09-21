import { prisma } from "./prisma";

export async function getProjectsBySkill(skill: string) {
  const projects = await prisma.project.findMany({
    where: {
      Skill: {
        has: skill,
      },
    },
  });
  return projects;
}