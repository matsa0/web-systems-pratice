import ICity from "./ICity"

interface ILocal {
    id: number
    name: string
    address: string
    city_id: number
    city: ICity
    created_at: Date
    updated_at: Date
}

export default ILocal