import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Sidebar/Sidebar';
import Navber from '../Pages/shared/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='flex gap-3'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;