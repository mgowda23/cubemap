import React from 'react'
import { useRoutes, Link, NavLink } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const NotFound = () => (
    <section className='status-message'>
        <h2>DNF: page not found</h2>
        <Link to='/' role='button'>Back to the cube</Link>
    </section>
)

const App = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <Locations />
        },
        {
            path: '/locations/:slug',
            element: <LocationEvents />
        },
        {
            path: '/events',
            element: <Events />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])

    return (
        <div className='app'>
            <header className='main-header'>
                <Link to='/' className='brand'>
                    <span className='brand-logo' aria-hidden='true'>
                        <span className='cube-orange' /><span className='cube-white' />
                        <span className='cube-green' /><span className='cube-red' />
                    </span>
                    <h1>CubeMap</h1>
                </Link>

                <nav className='header-nav'>
                    <NavLink to='/' end>Regions</NavLink>
                    <NavLink to='/events'>All Events</NavLink>
                </nav>
            </header>

            <main>
                {element}
            </main>
        </div>
    )
}

export default App
