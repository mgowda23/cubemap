import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import { isPastEvent, sortUpcomingFirst } from '../utils/dates'
import '../css/Events.css'

const sorters = {
    upcoming: events => sortUpcomingFirst(events),
    'date-asc': events => [...events].sort((a, b) => new Date(a.start_time) - new Date(b.start_time)),
    'date-desc': events => [...events].sort((a, b) => new Date(b.start_time) - new Date(a.start_time)),
    name: events => [...events].sort((a, b) => a.title.localeCompare(b.title))
}

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    // Filters live in the URL (e.g. /events?location=asia) so filtered views can be shared
    const locationFilter = searchParams.get('location') || 'all'
    const sortBy = searchParams.get('sort') || 'upcoming'
    const hidePast = searchParams.get('hidePast') === 'true'

    const updateParam = (key, value, defaultValue) => {
        const params = new URLSearchParams(searchParams)
        value === defaultValue ? params.delete(key) : params.set(key, value)
        setSearchParams(params, { replace: true })
    }

    useEffect(() => {
        (async () => {
            try {
                const [eventsData, locationsData] = await Promise.all([
                    EventsAPI.getAllEvents(),
                    LocationsAPI.getAllLocations()
                ])
                setEvents(eventsData)
                setLocations(locationsData)
            }
            catch (error) {
                setError(error.message)
            }
        }) ()
    }, [])

    const filteredEvents = events
        .filter(event => locationFilter === 'all' || event.location_slug === locationFilter)
        .filter(event => !hidePast || !isPastEvent(event))
    const visibleEvents = (sorters[sortBy] || sorters.upcoming)(filteredEvents)

    return (
        <section className='all-events'>
            <header className='all-events-header'>
                <h2>All Events</h2>
                <p>{visibleEvents.length} of {events.length} events</p>
            </header>

            <div className='event-filters'>
                <label>
                    Region
                    <select value={locationFilter} onChange={e => updateParam('location', e.target.value, 'all')}>
                        <option value='all'>All regions</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.slug}>{location.name}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Sort by
                    <select value={sortBy} onChange={e => updateParam('sort', e.target.value, 'upcoming')}>
                        <option value='upcoming'>Upcoming first</option>
                        <option value='date-asc'>Date (oldest first)</option>
                        <option value='date-desc'>Date (newest first)</option>
                        <option value='name'>Name (A–Z)</option>
                    </select>
                </label>

                <label className='hide-past'>
                    <input
                        type='checkbox'
                        role='switch'
                        checked={hidePast}
                        onChange={e => updateParam('hidePast', String(e.target.checked), 'false')}
                    />
                    Hide past events
                </label>
            </div>

            {error && <p className='status-message'>{error}</p>}

            {visibleEvents.length > 0 ? (
                <div className='events-grid'>
                    {visibleEvents.map(event => <Event key={event.id} event={event} showLocation />)}
                </div>
            ) : (
                !error && <p className='status-message'>No events match these filters.</p>
            )}
        </section>
    )
}

export default Events
