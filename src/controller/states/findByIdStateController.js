import { prisma } from "../../database/client.js";

export class findByIdController {
    async handle(request, response) {
        const { id } = request.params
        try{
            const state = await prisma.state.findFirstOrThrow({
                where: {
                    id: parseInt(id) //filtered as Integer(parse)
                },
                include: {
                    cities: true
                }
            });

            return response.status(200).json(state)
        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}