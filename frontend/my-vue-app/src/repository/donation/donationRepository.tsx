const getAllDonations = async() => {
    const response = await fetch('http://localhost:5000/donations', {
        cache: 'no-cache'
    })
    return response.json()
}

const getByIdDonation = async(id: string) => {
    const response = await fetch(`http://localhost:5000/donations/${id}`, {
        cache: 'no-cache'
    })
    return response.json();
}

export { getAllDonations, getByIdDonation }