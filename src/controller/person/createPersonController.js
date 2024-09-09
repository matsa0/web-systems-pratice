import { prisma } from "../../database/client.js";

export class createPersonController {
    async handle(request, response) {
        const { name, house_street, house_number, house_complement, 
            document_number, city_id, blood_type_id } = request.body

        try {
            await prisma.city.findFirstOrThrow({
                where: {
                    id: parseInt(city_id)
                }
            }) 
        } catch (error) {
            return response.status(400).json({
                message: 'Invalid request.', 
                error: error
            })
        }

        try {
            await prisma.bloodType.findFirstOrThrow({
                where: {
                    id: parseInt(blood_type_id)
                }
            }) 
        } catch (error) {
            return response.status(400).json({
                message: 'Invalid request.', 
                error: error
            })
        }

        const person = await prisma.person.create({
            data: {
                name, 
                house_street,
                house_number,
                house_complement,
                document_number,
                city: {
                    connect: {
                        id: parseInt(city_id)
                    }
                },
                blood_type: {
                    connect: {
                        id: parseInt(blood_type_id)
                    }
                }
            }
        })
        return response.status(201).json(person)
    }
}