import React from 'react'
import { Link } from 'react-router-dom'
import useNow from '../hooks/useNow'
import { formatEventDate, getCountdown, formatCountdown } from '../utils/dates'
import '../css/Event.css'

const Event = ({ event, showLocation = false }) => {
    const now = useNow()
    const countdown = getCountdown(event.start_time, now)

    return (
        <article className={`event-card accent-${event.location_color} ${countdown.isPast ? 'event-past' : ''}`}>
            <div className='event-tags'>
                <span className='event-type'>{event.type}</span>
                {showLocation && (
                    <Link to={`/locations/${event.location_slug}`} className='event-location-chip'>
                        {event.location_name}
                    </Link>
                )}
                {countdown.isPast && <span className='event-finished'>Finished</span>}
            </div>

            <h3 className='event-title'>{event.title}</h3>

            <p className='event-detail'>
                <i className='fa-regular fa-calendar'></i>
                {formatEventDate(event.start_time, event.timezone)}
            </p>
            <p className='event-detail'>
                <i className='fa-solid fa-location-dot'></i>
                {event.venue}, {event.city}, {event.country}
            </p>

            {event.description && <p className='event-description'>{event.description}</p>}

            <ul className='event-puzzles'>
                {event.puzzles.map(puzzle => <li key={puzzle}>{puzzle}</li>)}
            </ul>

            <div className='event-countdown'>
                <span className='countdown-label'>{countdown.isPast ? 'Ended' : 'Starts in'}</span>
                <span className='countdown-time'>
                    {countdown.isPast ? `−${formatCountdown(countdown)}` : formatCountdown(countdown)}
                </span>
            </div>
        </article>
    )
}

export default Event
