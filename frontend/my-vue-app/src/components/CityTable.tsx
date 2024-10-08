'use client'

import Link from "next/link"
import ICity from "../types/ICity"
import { useEffect, useState } from "react"

const getAllCities = async() => {
    const response = await fetch('http://localhost:5000/cities', {
        cache: 'no-cache'
    })

    return response.json()

}

export default function CityTable() {

    const [ cities, setCities ] = useState<ICity[]>([])

    useEffect(() => {
        getAllCities()
            .then(data => setCities(data))
    }, [])

    const handleDelete = async( id : number ) => {

        const data = {
            id
        }

        const request : RequestInit = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        try {
            const response = await fetch('http://localhost:5000/cities', request)

            if (response.ok) {

                const city = await response.json();
                const { id } = city;

                window.alert(`City deleted! Id: ${id}`)

                setCities(cities.filter(
                    item => item.id != id 
                ))
            }

        } catch (error) {
            window.alert("Error updating city!")
            console.error(error)
        }

    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Atualizado em</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                </tr>
            </thead>

            <tbody>
                {
                    cities.map((city)=>{
                        return(
                            <tr key={city.id}>
                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.state.acronym}</td>
                                <td>{city.created_at?.toString()}</td>
                                <td>{city.updated_at?.toString()}</td>
                                <td>
                                    <Link
                                        href={`/cities/update/${city.id}`}>
                                        Alterar
                                    </Link>
                                </td>
                                <td>
                                    <button
                                    onClick={() =>{
                                        if (window.confirm("Confirma exclusão?")) {
                                            handleDelete(city.id)
                                        }
                                    }}>
                                    Excluir
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}