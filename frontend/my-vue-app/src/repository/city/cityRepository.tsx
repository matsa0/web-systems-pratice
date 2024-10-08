const getAllCities = async() => {
    const response = await fetch('http://localhost:5000/cities', {
        cache: 'no-cache'
    })
    return response.json()
}

const getByIdCity = async( id: string ) => {
    const response = await
        fetch(

            `http://localhost:5000/cities/${id}`,
            { cache: 'no-cache' }
        )
    return response.json();
}

export { getAllCities, getByIdCity }