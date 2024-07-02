import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import useSearchBook from '../hooks/useSearchBook'

const Hero = () => {
    const { query, handleChange, handleSubmit } = useSearchBook()

    return (
        <>
            <NavBar query={query} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Outlet context={[query]}/>
        </>
    )
}

export default Hero
