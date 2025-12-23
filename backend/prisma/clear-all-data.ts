import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🗑️ Clearing all data...\n')

  // Delete reviews first (foreign key constraint)
  const deletedReviews = await prisma.review.deleteMany({})
  console.log(`✅ Deleted ${deletedReviews.count} reviews`)

  // Delete shortlists
  const deletedShortlists = await prisma.shortlist.deleteMany({})
  console.log(`✅ Deleted ${deletedShortlists.count} shortlists`)

  // Delete all nurseries (both parent groups and children)
  const deletedNurseries = await prisma.nursery.deleteMany({})
  console.log(`✅ Deleted ${deletedNurseries.count} nurseries (groups + children)`)
  // Delete any remaining groups
  const deletedGroups = await prisma.group.deleteMany({})
  console.log(`✅ Deleted ${deletedGroups.count} groups`)
  // Delete all users
  const deletedUsers = await prisma.user.deleteMany({})
  console.log(`✅ Deleted ${deletedUsers.count} users`)

  console.log('\n✅ Database cleared successfully!')
  console.log('Ready for fresh testing! 🚀')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
