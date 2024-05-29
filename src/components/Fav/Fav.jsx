import { Link } from 'react-router-dom';
import { removeFav } from '../../store/books/bookSlice'
import { useDispatch, useSelector } from 'react-redux';

const Fav = () => {
  const book = useSelector((state) => state.books)

  const dispatch = useDispatch()

  const handleRemoveFav = (bookId) => {
    dispatch(removeFav(bookId))
  }

  return (
    <>
      {book.loading && <p className='mx-auto pt-52 text-center'>Loading...</p>}
      {!book.loading && book.error ? <p>Error: {book.error}</p> : null}
      {!book.loading && book.favbooks.length ? (
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 w-full sm:w-11/12 md:w-full px-4 gap-5 rounded-md max-w-[1200px] mb-10">
          {
            book.favbooks
              .map((book) => (
                <li key={book.id} className="flex flex-col relative w-full items-center bg-[#2D2F31] rounded-md shadow-lg">
                  <Link to={`/bookDetails/${book.id}`} className='w-full'>
                    <img src={book.image} alt={book.title} className="rounded-md object-cover h-[220px] w-full" />
                  </Link>
                  <p className="text-[#e9e9e9] text-center mx-2 my-2 line-clamp-2">
                    {book.title}
                  </p>
                  <button onClick={() => handleRemoveFav(book.id)} className='mt-auto w-full bg-[#d65a5a] hover:bg-[#f85f5f] text-white py-2 text-xs font-semibold tracking-widest rounded-b-md'>
                    REMOVE
                  </button>
                </li>
              ))
          }
        </ul>
      ) : null
      }
    </>
  )
}

export default Fav
