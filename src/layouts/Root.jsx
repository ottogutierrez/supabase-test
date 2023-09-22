import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Root() {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main className='bg-gray-500 h-screen'>
            <Outlet/>
        </main>
    </>
  )
}

export default Root