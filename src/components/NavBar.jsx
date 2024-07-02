import { Link } from 'react-router-dom'
import { MdFavorite } from "react-icons/md"
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { favPageToggle } from '../store/books/bookSlice'

const NavBar = ({query, handleChange, handleSubmit}) => {
    const dispatch = useDispatch()
    const fav = useSelector((state) => state.books)


    return (
        <nav className='flex items-center mt-4 mb-8 gap-4'>
            <Link to={fav.favPage ? '/' : '/favorite'} onClick={() => dispatch(favPageToggle())} className={`relative bg-[#2D2F31] hover:bg-[#383B3C] rounded-full p-[12px] h-[48px] w-[48px] transition-all ${fav.favPage ? 'text-[#d65a5a]' : 'text-[#e9e9e9]'}`}>
                <MdFavorite size={24} />
            </Link>
            <Search query={query} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </nav>
    )
}

export default NavBar
