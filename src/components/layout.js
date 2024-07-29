import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'
import CartTab from './cartTab' 
import { useSelector } from 'react-redux'
import FavouriteTab from './FavouriteTab'

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className=''>
        <main className={`
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>
            <Header />
            <Outlet />
        </main>
        <CartTab />
        <FavouriteTab/>
    </div>
  )
}

export default Layout