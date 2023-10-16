const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Celebrities' },
        { name: 'Politicians' },
        { name: 'Athletes' },
        { name: 'Musicians' },
        { name: 'Cartoons' },
        { name: 'Animals' },
        { name: 'Scientists' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();
