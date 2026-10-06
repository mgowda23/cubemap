const getAllLocations = async () => {
    const response = await fetch('/api/locations')
    if (!response.ok) throw new Error('Could not load locations')
    return response.json()
}

const getLocationBySlug = async (slug) => {
    const response = await fetch(`/api/locations/${slug}`)
    if (!response.ok) throw new Error('Location not found')
    return response.json()
}

const getLocationEvents = async (slug) => {
    const response = await fetch(`/api/locations/${slug}/events`)
    if (!response.ok) throw new Error('Could not load events')
    return response.json()
}

export default {
    getAllLocations,
    getLocationBySlug,
    getLocationEvents
}
