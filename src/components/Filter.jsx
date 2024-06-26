import { useSelector } from 'react-redux';
// import { fetchBooks } from '../../store/books/bookSlice'
import { useState } from 'react';


const Filter = () => {
  const [filter, setFilter] = useState('All')

  const fav = useSelector((state) => state.books.favbooks)

  // TODO: make a book filter with the next sections: free-ebooks / paid-ebooks / ebooks
  
  const handleFilter = (category) => {
    if (filter === category) return
    setFilter(category)
  }

  return (
    <div className='flex justify-between lg:w-[1168px] font-sans mx-2 mb-3'>
      <div className='flex gap-4'>
        <button onClick={() => handleFilter('All')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>All</button>
        <button onClick={() => handleFilter('Free')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>Free</button>
        <button onClick={() => handleFilter('Paid')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>Paid</button>
        <button onClick={() => handleFilter('eBooks')}
          className='bg-[#2D2F31] hover:bg-[#383B3C] rounded-md px-2 py-1'>eBooks</button>
      </div>
      <h2 className='bg-[#2D2F31] rounded-md px-2 py-1'>Fav {fav.length}</h2>
    </div>
  );
}


export default Filter
