import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🗑️ Clearing non-nursery-owner users...\n')

  // Get users to delete (excluding nursery owners)
  const usersToDelete = await prisma.user.findMany({
    where: {
      role: {
        not: 'NURSERY_OWNER'
      }
    },
    select: { id: true }
  })

  const userIds = usersToDelete.map(u => u.id)
  console.log(`Found ${userIds.length} users to delete (excluding nursery owners)`)

  if (userIds.length === 0) {
    console.log('\n✅ No users to delete!')
    return
  }

  // Delete reviews by these users
  const deletedReviews = await prisma.review.deleteMany({
    where: {
      userId: {
        in: userIds
      }
    }
  })
  console.log(`✅ Deleted ${deletedReviews.count} reviews`)

  // Delete shortlists by these users
  const deletedShortlists = await prisma.shortlist.deleteMany({
    where: {
      userId: {
        in: userIds
      }
    }
  })
  console.log(`✅ Deleted ${deletedShortlists.count} shortlists`)

  // Delete the users (excluding nursery owners)
  const deletedUsers = await prisma.user.deleteMany({
    where: {
      role: {
        not: 'NURSERY_OWNER'
      }
    }
  })
  console.log(`✅ Deleted ${deletedUsers.count} users`)

  console.log('\n✅ Non-nursery-owner users cleared successfully!')
  console.log('🏠 Nursery owners and their nurseries preserved!')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
