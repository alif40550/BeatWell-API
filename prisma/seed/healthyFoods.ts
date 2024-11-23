import prisma from '../../src/libs/prisma';
import data from './data/healthyFood.json';

const seedHealthyFoods = async () => {
  await prisma.healthyFood.createMany({
    data,
  });
};

export default seedHealthyFoods;
