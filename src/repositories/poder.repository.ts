import { PrismaClient, Poder } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllPoderes = async (): Promise<Poder[]> => {
  return prisma.poder.findMany();
};

export const getPoderById = async (id: number): Promise<Poder | null> => {
  return prisma.poder.findUnique({ where: { idPoder: id } });
};

export const createPoder = async (data: Omit<Poder, 'idPoder'>): Promise<Poder> => {
  return prisma.poder.create({ data });
};

export const updatePoder = async (id: number, data: Partial<Omit<Poder, 'idPoder'>>): Promise<Poder> => {
  return prisma.poder.update({ where: { idPoder: id }, data });
};

export const deletePoder = async (id: number): Promise<Poder> => {
  return prisma.poder.delete({ where: { idPoder: id } });
};
