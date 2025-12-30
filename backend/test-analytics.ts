import prisma from './src/config/database';
import { generateShortId } from './src/utils/id-generator';
import { hashPassword } from './src/utils';

async function testAnalyticsAPIs() {
  try {
    console.log('🧪 Testing Analytics APIs...\n');

    // Step 1: Create test data if needed
    console.log('Step 1: Checking existing data...');
    const userCount = await prisma.user.count();
    const reviewCount = await prisma.review.count();
    
    console.log(`📊 Current Users: ${userCount}`);
    console.log(`📊 Current Reviews: ${reviewCount}\n`);

    // Step 2: Create sample user if database is empty
    if (userCount === 0) {
      console.log('Step 2: Creating sample user for testing...');
      const userId = await generateShortId('USR');
      const hashedPassword = await hashPassword('TestPass@123');
      
      await prisma.user.create({
        data: {
          id: userId,
          email: `test_${Date.now()}@example.com`,
          password: hashedPassword,
          firstName: 'Test',
          lastName: 'User',
          role: 'USER',
          isActive: true,
        },
      });
      console.log('✅ Sample user created\n');
    }

    // Step 3: Test monthly user aggregation
    console.log('Step 3: Testing monthly user statistics aggregation...');
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 11, 1);
    
    const users = await prisma.user.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        createdAt: true,
      },
    });

    const monthlyUserData: { [key: string]: number } = {};
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(new Date().getFullYear(), new Date().getMonth() - i, 1);
      const monthKey = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      });
      monthlyUserData[monthKey] = 0;
    }

    users.forEach((user) => {
      const monthKey = new Date(user.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      });
      if (monthlyUserData[monthKey] !== undefined) {
        monthlyUserData[monthKey]++;
      }
    });

    console.log('📈 Monthly User Data:');
    Object.entries(monthlyUserData).forEach(([month, count]) => {
      console.log(`   ${month}: ${count} users`);
    });

    // Step 4: Test monthly review aggregation
    console.log('\nStep 4: Testing monthly review statistics aggregation...');
    const reviews = await prisma.review.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        createdAt: true,
        isApproved: true,
      },
    });

    const monthlyReviewData: { 
      [key: string]: { 
        total: number; 
        approved: number; 
      } 
    } = {};
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(new Date().getFullYear(), new Date().getMonth() - i, 1);
      const monthKey = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      });
      monthlyReviewData[monthKey] = { total: 0, approved: 0 };
    }

    reviews.forEach((review) => {
      const monthKey = new Date(review.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      });
      if (monthlyReviewData[monthKey] !== undefined) {
        monthlyReviewData[monthKey].total++;
        if (review.isApproved) {
          monthlyReviewData[monthKey].approved++;
        }
      }
    });

    console.log('📊 Monthly Review Data:');
    Object.entries(monthlyReviewData).forEach(([month, data]) => {
      console.log(`   ${month}: ${data.total} reviews (${data.approved} approved)`);
    });

    console.log('\n✅ Analytics data test complete!');
    console.log('\n📌 Now test the API endpoints:');
    console.log('   GET /api/admin/analytics/monthly-users?months=12');
    console.log('   GET /api/admin/analytics/monthly-reviews?months=12');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAnalyticsAPIs();
