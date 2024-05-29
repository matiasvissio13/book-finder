import { useState } from 'react'
import { fetchBooks, favPageToggle } from '../store/books/bookSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useSearchBook = () => {
    const [query, setQuery] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query === '') return
        dispatch(fetchBooks(query))
        setQuery('')
        favPageToggle(false)
        navigate('/bookList')
    }

    return {
        query,
        handleChange,
        handleSubmit
    }
};

export default useSearchBook

