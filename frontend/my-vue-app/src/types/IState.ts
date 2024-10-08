import ICity from "./ICity"

interface IState {
    id: number
    name: string
    abbreviation: string
    created_at: Date
    updated_at: Date
    City: ICity[]
}

export default IState