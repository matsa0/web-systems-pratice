import { prisma } from "../../database/client.js";

export class updateLocalController {
    async handle(request, response) {
        const { id, name, street, number, complement, city_id } = request.body

        const local = await prisma.local.update({
            data: {
                name,
                street,
                number,
                complement,
                city_id: parseInt(city_id)
            },
            where: {
                id: parseInt(id)
            }
        })
        return response.status(200).json(local)
    }
}