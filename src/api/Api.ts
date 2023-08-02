import Fastify, { FastifyInstance } from 'fastify'
import fastifyAutoload from "@fastify/autoload";
import fastifyRateLimit from "@fastify/rate-limit";
import fastifyBcrypt from "fastify-bcrypt";
import fastifyFileUpload from 'fastify-file-upload';
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import fastifyMetrics from "fastify-metrics";
import fastifyQs from "fastify-qs";
import * as path from "path";

export default class Api {
	static _instance: Api
	private fastify: FastifyInstance

	static getInstance(): Api {
		if (typeof Api._instance === 'undefined') {
			Api._instance = new Api()
		}
		return Api._instance
	}

	constructor() {
		this.fastify = Fastify({
			logger: {
				enabled: true,
				transport: {
					target: 'pino-pretty',
				}
			},
			ignoreTrailingSlash: true,
			trustProxy: true,
		})
	}

	async start(): Promise<void> {
		await this.registerPlugins()

		this.fastify.listen({ port: 3000 }, (err, address) => {
			if (err) {
				this.fastify.log.error(err)
				process.exit(1)
			}
		})
	}

	async stop(): Promise<void> {
		await this.fastify.close()
	}

	async registerPlugins(): Promise<void> {
		this.fastify.register(fastifyAutoload, {
			dir: __dirname + '/routes',
		})

		this.fastify.register(fastifyAutoload, {
			dir: __dirname + '/plugins',
		})

		// https://github.com/fastify/fastify-rate-limit
		this.fastify.register(fastifyRateLimit, {
			max: 100,
			timeWindow: '1 minute'
		})

		// https://github.com/beliven-it/fastify-bcrypt
		this.fastify.register(fastifyBcrypt, {
			saltWorkFactor: 12
		})

		// https://github.com/huangang/fastify-file-upload
		this.fastify.register(fastifyFileUpload, {
			limits: {
				fileSize: 1024 * 1024 * 50, // 50MB
			}
		})

		// https://github.com/fastify/fastify-cors
		this.fastify.register(fastifyCors, {
			origin: '*',
		})

		// https://github.com/fastify/fastify-static
		console.log(__dirname)
		this.fastify.register(fastifyStatic, {
			root: path.join(__dirname, '/public'),
			prefix: '/public/',
			constraints: { host: 'example.com' }
		})

		// https://github.com/Shiva127/fastify-204
		this.fastify.register(require('fastify-204'), {
			onUndefined: true,
			onNull: false,
			onEmptyArray: false,
		})

		// https://gitlab.com/m03geek/fastify-metrics
		this.fastify.register(fastifyMetrics, {
			endpoint: '/metrics',
		})

		// https://www.npmjs.com/package/fastify-qs
		this.fastify.register(fastifyQs)
	}
}
