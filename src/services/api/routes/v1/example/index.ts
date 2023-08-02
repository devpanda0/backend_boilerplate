import { FastifyInstance } from 'fastify'

export default async function ExampleRoutes(fastify: FastifyInstance): Promise<void> {
	fastify.get('/', async function (request, reply) {
		return 'Hi there!'
	})
}
