import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import CubeFace from '../components/CubeFace'
import '../css/Locations.css'

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                setLocations(await LocationsAPI.getAllLocations())
            }
            catch (error) {
                setError(error.message)
            }
        }) ()
    }, [])

    return (
        <section className='locations'>
            <div className='locations-intro'>
                <h2>Pick a face. Find your next solve.</h2>
                <p>Every face of the cube is a region of the world. Click one to see the competitions, meetups and workshops happening there.</p>
            </div>

            {error && <p className='status-message'>{error}</p>}

            <nav className='cube-net' aria-label='Choose a region'>
                {locations.map(location => (
                    <Link
                        key={location.id}
                        to={`/locations/${location.slug}`}
                        className={`net-face net-face-${location.face}`}
                    >
                        <CubeFace color={location.color} className='net-stickers' />
                        <span className='net-label'>
                            <strong>{location.name}</strong>
                            <small>{location.event_count} {location.event_count === 1 ? 'event' : 'events'}</small>
                        </span>
                    </Link>
                ))}
            </nav>

            <p className='locations-hint'>Hover a face to give it a turn ↻</p>
        </section>
    )
}

export default Locations
