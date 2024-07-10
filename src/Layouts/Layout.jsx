import React from 'react'
import Pizzalogo from '../assets/Images/pizza1.png'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Slices/AuthSlice'
import { Link } from 'react-router-dom'

function Layout({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn )
    const dispatch = useDispatch()

    async function handleLogOut(e) {
        e.preventDefault();
        dispatch(logout())
    }

  return (
    <div>
        <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md"> 

                <div className="flex items-center justify-center">
                    <p>Pizza App</p>
                    <img src={Pizzalogo} alt="Pizza logo" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>About {' '}</p>
                        </li>

                    </ul>
                </div>

                <div>
                    <ul className='flex gap-4'>
                        <li className='hover:text-[#ff9110]'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogOut}>LogOut</Link>
                            ) : (
                                <Link to={'/auth/login'}>LogIn</Link>
                            )}
                        </li>
                    </ul>
                </div>

        </nav>
        {children}
        <Footer />
    </div>
  )
}

export default Layout
