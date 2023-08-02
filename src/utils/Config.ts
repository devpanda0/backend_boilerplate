import { Prisma, Settings } from "../../prisma/generated/client";
import prisma from "./Prisma";

export default class ConfigService {
	private static _instance: ConfigService;
	config: Settings | null;

	static getInstance(): ConfigService {
		if (typeof ConfigService._instance === "undefined") {
			console.log("Erstelle ConfigService Instanz...");
			ConfigService._instance = new ConfigService();

		}

		return ConfigService._instance;
	}

	private constructor() {
		this.config = null;
	}

	async fetchSettings(): Promise<void> {
		this.config = await prisma.settings.findFirst();
	}

	async updateSettings(settings: Prisma.SettingsUpdateInput): Promise<void> {
		this.config = await prisma.settings.update({
			where: {
				id: 1
			},
			data: settings
		});
	}
}
