-- Check all tables in public schema
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

-- Count rows in each table
SELECT 'users' as table_name, COUNT(*) as row_count FROM users
UNION ALL
SELECT 'nurseries', COUNT(*) FROM nurseries
UNION ALL
SELECT 'reviews', COUNT(*) FROM reviews
UNION ALL
SELECT 'shortlists', COUNT(*) FROM shortlists
UNION ALL
SELECT 'articles', COUNT(*) FROM articles
UNION ALL
SELECT 'contact_submissions', COUNT(*) FROM contact_submissions
UNION ALL
SELECT 'subscriptions', COUNT(*) FROM subscriptions
UNION ALL
SELECT '_prisma_migrations', COUNT(*) FROM _prisma_migrations;
