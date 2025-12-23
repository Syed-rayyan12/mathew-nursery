import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearArticles() {
  try {
    console.log('🗑️  Clearing all articles...');

    const result = await prisma.article.deleteMany({});

    console.log(`✅ Deleted ${result.count} articles`);
    console.log('✅ All articles cleared successfully');
  } catch (error) {
    console.error('❌ Error clearing articles:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

clearArticles()
  .catch((error) => {
    console.error('Failed to clear articles:', error);
    process.exit(1);
  });
