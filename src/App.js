import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Root from './components/Root/Root';
import Books from './components/Books';
import BookDetails from './components/BookDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({params}) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    ]
  },



]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
