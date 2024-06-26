import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline } from "react-icons/io5";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { favPageToggle } from '../store/books/bookSlice';

const BookDetails = () => {
    const { id } = useParams()
    const book = useSelector((state) => state.books)
    const fav = useSelector((state) => state.books.favPage)
    const element = book.books.find((item) => item.id === id) ? book.books.find((item) => item.id === id) : book.favbooks.find((item) => item.id === id)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBackToHome = () => {
        if (fav === true) {
            navigate('/favorite')
        } else {
            navigate('/bookList')
            dispatch(favPageToggle(false))
        }
    }

    const { image, title, authors, publishedDate, description } = element || {}

    return (
        <section>
            <div className='flex flex-row relative w-[1200px] bg-[#2D2F31] rounded-md px-5 py-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center  h-[250px] w-max rounded-md'>
                        <img src={image} alt={title} className="rounded-md object-cover h-[250px] w-[160px]" />
                    </div>
                </div>
                <div className='ps-7'>
                    <h2 className='text-2xl text-[#1976d2]'>
                        {title}
                    </h2>
                    <p className='uppercase text-white'>
                        {authors}
                    </p>
                    <p>{publishedDate}</p>
                    <p className='pt-2 text-[#e9e9e9]'>
                        {description}
                    </p>
                </div>
                <Link onClick={handleBackToHome} className='absolute top-5 right-5 w-10 h-10 bg-[#2D2F31] hover:bg-[#383B3C] transition-colors duration-300 rounded-md'>
                    <div className='w-full h-full flex items-center justify-center transition-transform duration-300 hover:rotate-90'>
                        <IoCloseOutline size={24} />
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default BookDetails
