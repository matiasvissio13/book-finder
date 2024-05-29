import { Link } from 'react-router-dom'
import { MdFavorite } from "react-icons/md"
import Search from '../Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { favPageToggle } from '../../store/books/bookSlice'

const NavBar = () => {
    const dispatch = useDispatch()
    const fav = useSelector((state) => state.books.favPage)

    return (
        <nav className='flex items-center mt-4 mb-8 gap-4'>
            <Link to={fav ? '/' : '/favorite'} onClick={() => dispatch(favPageToggle())} className={`bg-[#2D2F31] hover:bg-[#383B3C] rounded-full p-3 h-[48px] w-[48px] transition-all ${fav ? 'text-[#d65a5a]' : 'text-[#e9e9e9]'}`}>
                <MdFavorite size={23} />
            </Link>
            <Search />
        </nav>
    )
}

export default NavBar
