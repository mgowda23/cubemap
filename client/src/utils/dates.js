const pad = (value) => String(value).padStart(2, '0')

// Shows the event's date in the venue's own timezone, e.g. "Sat, Nov 7, 2026 · 9:30 AM GMT+5:30"
export const formatEventDate = (isoString, timeZone) => {
    const date = new Date(isoString)

    const day = date.toLocaleDateString('en-US', {
        weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', timeZone
    })
    const time = date.toLocaleTimeString('en-US', {
        hour: 'numeric', minute: '2-digit', timeZoneName: 'short', timeZone
    })

    return `${day} · ${time}`
}

// Splits the time between now and the event into days/hours/minutes/seconds
export const getCountdown = (isoString, now) => {
    const diff = new Date(isoString).getTime() - now
    const total = Math.abs(diff)

    return {
        isPast: diff <= 0,
        days: Math.floor(total / 86400000),
        hours: Math.floor(total / 3600000) % 24,
        minutes: Math.floor(total / 60000) % 60,
        seconds: Math.floor(total / 1000) % 60
    }
}

// Speedcubing-timer style countdown, e.g. "32d 04:05:09"
export const formatCountdown = ({ days, hours, minutes, seconds }) =>
    `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`

export const isPastEvent = (event, now = Date.now()) => new Date(event.start_time).getTime() <= now

// Upcoming events soonest-first, followed by past events most-recent-first
export const sortUpcomingFirst = (events, now = Date.now()) => {
    const upcoming = events.filter(event => !isPastEvent(event, now))
        .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
    const past = events.filter(event => isPastEvent(event, now))
        .sort((a, b) => new Date(b.start_time) - new Date(a.start_time))

    return [...upcoming, ...past]
}
