import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../store/books/bookSlice'

const Filter = ({query}) => {
  const fav = useSelector((state) => state.books.favbooks)
  const dispatch = useDispatch()

  // TODO: make a book filter with the next sections: free-ebooks / paid-ebooks / ebooks

  const handleFilter = (category) => {
    const newQuery = query === '' ? 'harry potter' : query
    dispatch(fetchBooks({ searchQuery:  newQuery, filterEl: category }))
  }

  return (
    <div className='flex justify-between lg:w-[1168px] font-sans mx-2 mb-3'>
      <div className='flex gap-4'>
        <button onClick={() => handleFilter('')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>All</button>
        <button onClick={() => handleFilter('free-ebooks')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>Free</button>
        <button onClick={() => handleFilter('paid-ebooks')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>Paid</button>
        <button onClick={() => handleFilter('ebooks')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>eBooks</button>
      </div>
      <h2 className='bg-[#2D2F31] rounded-md px-2 py-1'>Fav {fav.length}</h2>
    </div>
  )
}


export default Filter
