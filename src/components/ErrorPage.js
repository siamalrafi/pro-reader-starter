import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {error &&
          <div>
            <p className='text-xl text-red-400'>{error.statusText || error.massage}</p>
            <p className='text-2xl'>{error.status}</p>
          </div>
        }
      </div>
    </>
  )
}

export default ErrorPage
