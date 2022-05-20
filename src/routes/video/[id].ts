import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = ({ params }) => {
	return {
		body: {
			videoId: params.id
		}
	};
};
