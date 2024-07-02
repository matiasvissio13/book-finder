import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
    loading: false,
    books: [],
    favbooks: window.localStorage.getItem('books') ? JSON.parse(window.localStorage.getItem('books')) : [],
    favPage: window.localStorage.getItem('fav') !== null ? JSON.parse(window.localStorage.getItem('fav')) : false,
    query: '',
    error: false
}

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async (arge) => {
        const { searchQuery, filterEl } = arge

        if (searchQuery === '' || searchQuery === undefined) return null

        // GET https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey

        const filter = filterEl !== '' ? '&filter=' + filterEl : ''

        try {
            const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${filter}&maxResults=14&key=${API_KEY}`)
            const json = await resp.json()
            const books = json.items

            return books?.map(book => ({
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
                publisher: book.volumeInfo.publisher,
                publishedDate: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                fav: JSON.parse(window.localStorage.getItem('books') || '[]').some(item => item.id === book.id)
            }))
        } catch (e) {
            throw new Error('Error searching books')
        }
    })

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        toggleFav: (state, action) => {
            const book = state.books.find(book => book.id === action.payload)
            if (book) {
                book.fav = !book.fav
            }
            if (book.fav) {
                state.favbooks = [...state.favbooks, book]
            } else {
                state.favbooks = state.favbooks.filter(favBook => favBook.id !== book.id)
            }
            window.localStorage.setItem('books', JSON.stringify(state.favbooks))
        },
        removeFav: (state, action) => {
            const book = state.books.find(book => book.id === action.payload)
            if (book) {
                book.fav = false
            }
            state.favbooks = state.favbooks.filter(favBook => favBook.id !== action.payload)
            window.localStorage.setItem('books', JSON.stringify(state.favbooks))
        },
        favPageToggle: (state, action) => {
            if (action.payload === undefined) {
                state.favPage = !state.favPage
            } else {
                state.favPage = action.payload
            }
            window.localStorage.setItem('fav', state.favPage.toString())
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload
            state.error = ''
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false
            state.books = []
            state.error = ''
        })
    }
})

export const { toggleFav, removeFav, favPageToggle } = bookSlice.actions;

export default bookSlice.reducer;