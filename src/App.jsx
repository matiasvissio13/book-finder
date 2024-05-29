import { useEffect } from "react"
import { fetchBooks } from './store/books/bookSlice'
import { useDispatch } from "react-redux"
import Hero from "./components/Hero/Hero"
import Fav from './components/Fav/Fav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookDetails from './components/BookDetails/BookDetails.jsx'
// import NavBar from "./components/NavBar/NavBar.jsx"
import ListBooks from "./components/ListBooks/ListBooks.jsx"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks('Harry Potter'))
  }, [])


  const router = createBrowserRouter([
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
    <div className='flex h-full flex-col items-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
