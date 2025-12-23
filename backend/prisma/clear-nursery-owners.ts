import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearNurseryOwners() {
  try {
    console.log('🗑️  Clearing all NURSERY_OWNER users...');

    // Delete in correct order to avoid foreign key constraints
    // 1. Delete nurseries first
    const nurseriesDeleted = await prisma.nursery.deleteMany({});
    console.log(`✅ Deleted ${nurseriesDeleted.count} nursery/nurseries`);
    
    // 2. Delete groups
    const groupsDeleted = await prisma.group.deleteMany({});
    console.log(`✅ Deleted ${groupsDeleted.count} group(s)`);

    // 3. Finally delete nursery owners
    const result = await prisma.user.deleteMany({
      where: {
        role: 'NURSERY_OWNER',
      },
    });

    console.log(`✅ Deleted ${result.count} nursery owner(s)`);

    console.log('✅ All nursery owners and related data cleared!');
  } catch (error) {
    console.error('❌ Error clearing nursery owners:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearNurseryOwners();
