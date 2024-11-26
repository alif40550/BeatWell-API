import prisma from '../libs/prisma';

export const getTriviaById = async (id: number) => {
  return await prisma.trivia.findUnique({
    where: {
      id,
    },
  });
};
