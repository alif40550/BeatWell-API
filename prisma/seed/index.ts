import prisma from '../../src/libs/prisma';
import seedHealthyFoods from './healthyFoods';

seedHealthyFoods()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
