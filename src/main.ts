import Api from "./services/api/Api";
import prisma from "./utils/Prisma";
import process from "process";
import ConfigService from "./utils/Config";

process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
})

process.on("uncaughtException", (error) => {
	console.error("Uncaught Exception:", error);
})

process.on("uncaughtExceptionMonitor", (error) => {
	console.error("Uncaught Exception Monitor:", error);
})

async function start() {
	await prisma.$connect()

	await ConfigService.getInstance().fetchSettings()
	const config = ConfigService.getInstance().config!

	if (config.apiAutoStart) {
		await Api.getInstance().start()
	}
}

void start()

async function stop() {
	// Stop first all services
	await Api.getInstance().stop()

	await prisma.$disconnect()
}
