import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Event from '../components/Event'
import CubeFace from '../components/CubeFace'
import LocationsAPI from '../services/LocationsAPI'
import { isPastEvent, sortUpcomingFirst } from '../utils/dates'
import '../css/LocationEvents.css'

const LocationEvents = () => {
    const { slug } = useParams()
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setLocation(null)
        setError(null)

        ;(async () => {
            try {
                const [locationData, eventsData] = await Promise.all([
                    LocationsAPI.getLocationBySlug(slug),
                    LocationsAPI.getLocationEvents(slug)
                ])
                setLocation(locationData)
                setEvents(eventsData)
            }
            catch (error) {
                setError(error.message)
            }
        }) ()
    }, [slug])

    if (error) {
        return (
            <section className='status-message'>
                <h2>{error}</h2>
                <Link to='/' role='button'>Back to the cube</Link>
            </section>
        )
    }

    if (!location) return <p className='status-message'>Loading…</p>

    const sortedEvents = sortUpcomingFirst(events)
    const upcomingCount = events.filter(event => !isPastEvent(event)).length

    return (
        <section className='location-events'>
            <header className='location-header'>
                <CubeFace color={location.color} className='location-face' />
                <div>
                    <Link to='/' className='back-link'>← All regions</Link>
                    <h2>{location.name}</h2>
                    <p>{location.tagline}</p>
                    <p className='location-stats'>
                        {upcomingCount} upcoming · {events.length - upcomingCount} past
                    </p>
                </div>
            </header>

            {sortedEvents.length > 0 ? (
                <div className='events-grid'>
                    {sortedEvents.map(event => <Event key={event.id} event={event} />)}
                </div>
            ) : (
                <p className='status-message'>
                    <i className='fa-regular fa-calendar-xmark'></i> No events scheduled here yet!
                </p>
            )}
        </section>
    )
}

export default LocationEvents
