import IBloodType from "./IBloodType"
import ICity from "./ICity"
import IDonation from "./IDonation"

interface IPerson {
    id: number
    name: string
    birthdate: Date
    blood_type_id: number
    bloodType: IBloodType
    city_id: number
    city: ICity
    created_at: Date
    updated_at: Date
    Donation: IDonation[]
}

export default IPerson