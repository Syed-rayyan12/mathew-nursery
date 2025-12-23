const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkReviews() {
  try {
    const reviews = await prisma.review.findMany({
      include: {
        nursery: {
          select: { name: true, slug: true }
        },
        user: {
          select: { firstName: true, email: true }
        }
      }
    });

    console.log('\n📊 Total reviews in database:', reviews.length);
    console.log('='.repeat(80));
    
    reviews.forEach((r, index) => {
      console.log(`\n${index + 1}. Review ID: ${r.id}`);
      console.log(`   Nursery: ${r.nursery?.name || 'NOT FOUND'}`);
      console.log(`   Rating: ${r.overallRating} stars`);
      console.log(`   UserId: ${r.userId || 'NULL (No userId saved)'}`);
      console.log(`   User: ${r.user?.firstName || 'NO USER LINKED'} (${r.user?.email || 'N/A'})`);
      console.log(`   Created: ${r.createdAt}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Reviews with userId: ${reviews.filter(r => r.userId).length}`);
    console.log(`❌ Reviews without userId: ${reviews.filter(r => !r.userId).length}\n`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkReviews();
