import { FastifyInstance } from 'fastify';

export default async function examplePlugin(fastify: FastifyInstance) {
	fastify.decorate('exampleProperty', 'This is an example property added by a plugin!');
}
