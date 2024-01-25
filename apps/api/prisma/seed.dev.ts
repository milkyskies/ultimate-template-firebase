import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.$transaction(async (tx) => {
    // await tx.user.upsert({
    //   where: { email: DEFAULT_ADMIN_EMAIL },
    //   update: {},
    //   create: {
    //     email: DEFAULT_ADMIN_EMAIL,
    //     supertokensUserId: '61a982fc-acc7-41dc-8892-c4ee1ad406f3',
    //     roles: [Role.MANAGER, Role.USER],
    //   },
    // });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
