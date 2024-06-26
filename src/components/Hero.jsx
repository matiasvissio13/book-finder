import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Filter from './Filter'

const Hero = () => {
    return (
        <>
            <NavBar />
            <Filter/>
            <Outlet/>
        </>
    )
}

export default Hero
