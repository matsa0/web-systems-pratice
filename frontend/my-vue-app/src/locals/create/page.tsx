'use client'

import Input from "../../components/form/InputForm";
import { getAllCities } from "../../repository/city/cityRepository";
import ICity from "../../types/ICity";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function LocalCreate() {

    const [ name, setName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ cityId, setCityId ] = useState('')

    const [ cities, setCities ] = useState<ICity[]>([])

    const { push } = useRouter()

    useEffect(() => {
        getAllCities().then(setCities)
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Name" value={name} onChange={e => setName(e.target.value)} />
            <Input label="Address" value={address} onChange={e => setAddress(e.target.value)} />
            <select value={cityId} onChange={e => setCityId(e.target.value)}>
                <option value="">Select City</option>
                {cities.map(city => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}