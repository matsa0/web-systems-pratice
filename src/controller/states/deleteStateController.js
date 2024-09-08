import { prisma } from "../../database/client.js";

export class deleteStateController {
    async handle(request, response) {
        const { id } = request.params

        try{
            await prisma.state.delete({
                where: {
                    id: parseInt(id)
                }
            })

            return response.status(204).json()
        } catch(error) {
            return response.status(400).json({
                message: 'Invalid request.',
                error: error
            })
        }
    }
}