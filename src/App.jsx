import { useEffect } from "react"
import { fetchBooks } from './store/books/bookSlice'
import { useDispatch } from "react-redux"
import Hero from "./components/Hero"
import Fav from './components/Fav'
import BookDetails from './components/BookDetails.jsx'
import ListBooks from "./components/ListBooks.jsx"
import { createHashRouter, RouterProvider } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks({searchQuery: 'Harry Potter', filterEl: ''}))
  }, [])


  const router = createHashRouter([
    {
      element: <Hero />,
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
          index: true,
          element: <ListBooks />,
        },
        {
          path: '/bookList',
          element: <ListBooks />,
        },
        {
          path: '/bookDetails/:id',
          element: <BookDetails />,
        },
        {
          path: '/favorite',
          element: <Fav />,
          errorElement: <h1>404 Not Found</h1>
        },
      ]
    }
  ])


  return (
    <div className='flex h-screen flex-col items-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
