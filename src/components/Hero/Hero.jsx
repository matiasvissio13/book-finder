import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const Hero = () => {
    return (
        <>
            <NavBar />      
            <Outlet/>
        </>
    )
}

export default Hero
