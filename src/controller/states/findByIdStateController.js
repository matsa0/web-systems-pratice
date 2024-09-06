import { prisma } from "../../database/client.js";

export class findByIdController {
    async handle(request, response) {
        const { id } = request.params

        const state = await prisma.state.findUnique({
            where: {
                id: parseInt(id) //filtered as Integer(parse)
            }
        });
        return response.status(200).json(state)
    }
}