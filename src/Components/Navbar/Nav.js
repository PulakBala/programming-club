import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Nav = () => {
    const [open , setOpen] = useState(false)
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Search', path: '/search'},
        {id: 3, name: 'Events', path: '/events'},
        {id: 4, name: 'Forum', path: '/forum'},
        {id: 5, name: 'Certificate', path: '/certificate'},
        {id: 6, name: 'Settings', path: '/settings'},
        {id: 7, name: 'Login', path: '/login'},


    ]
    return (
      
        <nav className='bg-gray-500 w-full h-16 sticky top-0'> 
            <div onClick={() => setOpen(!open)} className="h-12 w-12 md:hidden mr-auto" >
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
            </div>
            <ul className={`bg-gray-500 w-full md:flex justify-center  absolute md:static duration-500 ${open? 'top-12' : 'top-[-180px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;