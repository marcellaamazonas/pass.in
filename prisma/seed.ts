//Popular o banco de dados
import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "5770d712-d576-47c2-a49f-3f6255f7633e",
      title: "Unite Summite",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados por tecnologia.",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded.");
  prisma.$disconnect();
});
