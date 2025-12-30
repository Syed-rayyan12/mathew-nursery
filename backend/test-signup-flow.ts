import prisma from './src/config/database';
import { hashPassword } from './src/utils';
import { generateShortId } from './src/utils/id-generator';
import { createNotification } from './src/controllers/notification.controller';

async function testSignup() {
  try {
    console.log('Testing signup flow...\n');

    // Step 1: Create a user
    console.log('Step 1: Creating user...');
    const userId = await generateShortId('USR');
    const hashedPassword = await hashPassword('TestPass@123');
    
    const user = await prisma.user.create({
      data: {
        id: userId,
        email: 'test_signup@example.com',
        password: hashedPassword,
        firstName: 'Test',
        lastName: 'Signup',
        phone: '1234567890',
        address: '123 Test St',
        role: 'USER',
        isActive: false,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
    
    console.log('✅ User created:', user);

    // Step 2: Create notification
    console.log('\nStep 2: Creating notification...');
    const notification = await createNotification(
      'New User Signup',
      `New user registered: ${user.firstName} ${user.lastName} (${user.email})`,
      'USER',
      user.id
    );
    
    console.log('✅ Notification created:', notification);

    // Step 3: Verify notification in database
    console.log('\nStep 3: Verifying notification in database...');
    const allNotifications = await prisma.notification.findMany();
    console.log('Total notifications in database:', allNotifications.length);
    console.log(JSON.stringify(allNotifications, null, 2));

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testSignup();
