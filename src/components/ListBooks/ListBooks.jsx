import { useEffect } from 'react'
import { toggleFav, favPageToggle } from '../../store/books/bookSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListBooks = () => {
  const book = useSelector((state) => state.books)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favPageToggle(false))
  }, [])

  return (
    <>
      {book.loading && <p className='mx-auto pt-52 text-center'>Loading...</p>}
      {!book.loading && book.error ? <p>Error: {book.error}</p> : null}
      {!book.loading && book.books.length ? (
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 w-full sm:w-11/12 md:w-full px-4 gap-5 rounded-md max-w-[1200px] mb-10">
          {
            book.books
              .filter(book => book.image && book.image)
              .map((book) => (
                <li key={book.id} className="flex flex-col relative w-full items-center bg-[#2D2F31] rounded-md shadow-lg">
                  <Link to={`/bookDetails/${book.id}`} className='w-full'>
                    <img src={book.image} alt={book.title} className="rounded-md object-cover h-[220px] w-full" />
                  </Link>
                  <button onClick={() => dispatch(toggleFav(book.id))}
                    className={`h-max absolute top-3 rounded-full p-2 bg-[#2d2f31af] hover:bg-[#383B3Caf] transition-all ${book.fav ? 'text-[#d65a5a] hover:text-[#e9e9e9]' : 'hover:text-[#d65a5a]'}`}>
                    {
                      book.fav
                        ? <FaHeart size={23} />
                        : <FaRegHeart size={23} />
                    }
                  </button>
                  <p className="h-12 text-[#e9e9e9] text-center mx-2 my-2 line-clamp-2">
                    {book.title}
                  </p>
                </li>
              ))
          }
        </ul>
      ) : null
      }
    </>
  )
}

export default ListBooks


