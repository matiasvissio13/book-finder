import { IoIosSearch } from "react-icons/io";
import useSearchBook from "../hooks/useSearchBook";

const Search = () => {
  const { query, handleChange, handleSubmit } = useSearchBook()
 
  return (
    <form onSubmit={handleSubmit} className='flex justify-center w-full'>
      <input
        className='rounded-l-full px-4 py-3 font-semibold bg-[#2D2F31] md:w-[500px] lg:w-[600px] appearance-none border-none p-2 focus:outline-none focus:ring-0'
        type="text"
        placeholder="Harry Potter, Mafalda..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className='rounded-r-full text-[#E9E9E9] bg-[#1565c0] hover:bg-[#1976d2] pr-4 pl-3 py-2 transition-all'><IoIosSearch size={24} /></button>
    </form>
  )
}

export default Search
