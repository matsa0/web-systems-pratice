import { prisma } from "../../database/client.js";

export class updatePersonController {
    async handle(request, response) {
        const { id, name, house_street, house_number, 
            house_complement, document_number, city_id } = request.body

        const person = await prisma.person.update({
            data: {
                name,
                house_street,
                house_number,
                house_complement,
                document_number,
                city_id: parseInt(city_id)
            },
            where: {
                id: parseInt(id)
            }
        })
        return response.status(200).json(person)
    }
}