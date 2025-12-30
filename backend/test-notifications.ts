import prisma from './src/config/database';

async function testNotifications() {
  try {
    console.log('🧪 Testing Notifications...\n');

    // Count total notifications
    const totalCount = await prisma.notification.count();
    console.log(`📊 Total notifications in DB: ${totalCount}`);

    // Get all notifications
    const allNotifications = await prisma.notification.findMany({
      orderBy: { createdAt: 'desc' },
    });

    console.log('\n📋 All Notifications:');
    if (allNotifications.length === 0) {
      console.log('❌ No notifications found in database!');
    } else {
      allNotifications.forEach((notif, index) => {
        console.log(`\n${index + 1}. ${notif.title}`);
        console.log(`   Message: ${notif.message}`);
        console.log(`   Entity: ${notif.entity} (ID: ${notif.entityId})`);
        console.log(`   Read: ${notif.isRead ? '✅' : '❌'}`);
        console.log(`   Created: ${notif.createdAt.toLocaleString()}`);
      });
    }

    // Count by entity
    console.log('\n\n📊 Notifications by Entity:');
    const byEntity = await prisma.notification.groupBy({
      by: ['entity'],
      _count: true,
    });

    byEntity.forEach((group: any) => {
      console.log(`   ${group.entity}: ${group._count}`);
    });

    // Count unread
    const unreadCount = await prisma.notification.count({
      where: { isRead: false },
    });
    console.log(`\n\n🔔 Unread notifications: ${unreadCount}`);

    console.log('\n✅ Test complete!');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testNotifications();
