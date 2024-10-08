'use client'

import Input from "../../components/form/InputForm";
import { getAllBloodTypes } from "../../repository/bloodTypeRepository";
import { getAllCities } from "../../repository/city/cityRepository";
import IBloodType from "../../types/IBloodType";
import ICity from "../../types/ICity";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function PersonCreate() {

    const [ name, setName ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ bloodTypeId, setBloodTypeId ] = useState('')
    const [ cityId, setCityId ] = useState('')

    const [ bloodTypes, setBloodTypes ] = useState<IBloodType[]>([])
    const [ cities, setCities ] = useState<ICity[]>([])

    const { push } = useRouter()

    useEffect(() => {
        getAllBloodTypes().then(setBloodTypes)
        getAllCities().then(setCities)
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Name" value={name} onChange={e => setName(e.target.value)} />
            <Input label="Birthdate" type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
            <select value={bloodTypeId} onChange={e => setBloodTypeId(e.target.value)}>
                <option value="">Select Blood Type</option>
                {bloodTypes.map(bt => (
                    <option key={bt.id} value={bt.id}>{bt.type}</option>
                ))}
            </select>
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