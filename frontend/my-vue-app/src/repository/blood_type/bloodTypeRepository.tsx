const getAllBloodTypes = async() => {
    const response = await fetch('http://localhost:5000/bloodTypes', {
        cache: 'no-cache'
    })
    return response.json()
}

const getByIdBloodType = async(id: string) => {
    const response = await fetch(`http://localhost:5000/bloodTypes/${id}`, {
        cache: 'no-cache'
    })
    return response.json();
}

export { getAllBloodTypes, getByIdBloodType }