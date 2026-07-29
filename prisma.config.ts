import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // ✅ এখানে database connection string দিন
  db: {
    url: process.env.DATABASE_URL,
  },
});
