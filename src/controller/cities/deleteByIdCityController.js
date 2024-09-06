import { prisma } from "../../database/client.js";

export class deleteByIdCityController {
    async handle(request, response) {
        const { id } = request.params

        await prisma.city.delete({
            where: {
                id: parseInt(id)
            }
        })

        return response.status(204).json()
    }
}