import prisma from '../../src/libs/prisma';
import seedHealthyFoods from './healthyFoods';
import seedTrivias from './trivias';

seedHealthyFoods()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
seedTrivias()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
