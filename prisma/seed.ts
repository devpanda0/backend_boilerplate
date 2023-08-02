import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient({ errorFormat: "pretty" });

async function main() {
	await prisma.settings.upsert({
		where: { id: 1 },
		create: {
			apiAutoStart: true,
			apiPort: 3000,
			apiDomain: "https://localhost:3000",
			apiMetricsPath: "/metrics",
			apiStaticPrefix: "/public/",
		},
		update: {
			apiAutoStart: true,
			apiPort: 3000,
			apiDomain: "https://localhost:3000",
			apiMetricsPath: "/metrics",
			apiStaticPrefix: "/public/",
		},
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
