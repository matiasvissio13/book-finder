import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBooks } from '../../store/books/bookSlice';

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');

  // const dispatch = useDispatch()

  // const query = useSelector((state) => state.query)

  // console.log(query)
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    // dispatch(fetchBooks({ searchQuery: query, filterEbook: isChecked }));
  };

  // console.log(isChecked)
  // console.log("filterEbook:", isChecked); // Verifica el valor de filterEbook

  return (
    <div className='flex gap-5 lg:w-[1000px] mx-2 mb-2'>
      <label className='flex gap-1'>
        <input
          type="radio"
          value="all"
          checked={selectedOption === 'all'}
          onChange={handleOptionChange}
        />
        All
      </label>
      <label className='flex gap-1'>
        <input
          type="radio"
          value="free"
          checked={selectedOption === 'free'}
          onChange={handleOptionChange}
        />
        Free
      </label>
      <label className='flex gap-1'>
        <input
          type="radio"
          value="paid"
          checked={selectedOption === 'paid'}
          onChange={handleOptionChange}
        />
        Paid
      </label>
      <label className='flex gap-1'>
        <input
          type="checkbox"
          value={isChecked}
          onChange={handleCheckboxChange}
        />
        Ebook
      </label>
    </div>
  );
}


export default Filter
