import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import logo from '../../assets/Group 257.png';
const Navber = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start w-[30%]">
                <Link to='/' className="normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center relative">
                <CiSearch className='absolute left-3 w-[25px] h-[30px] text-[#14314E] font-bold'/>
                <div className="form-control">
                    <input type="text" placeholder="Ronaldo Rafael Royero Zuniga Show Result" className="input input-bordered w-[775px] h-[54px] bg-[#F7F7F7] border-0 rounded-[12px] pl-10" />
                </div>
                <Link className="btn absolute right-0 w-[140px] h-[54px] bg-[#14314E]">Show Result</Link>
            </div>
            <div className="navbar-end gap-1">
                <Link className="btn w-[140px] h-[54px] bg-[#14314E]">Login</Link>
                <Link className="btn btn-md btn-outline w-[140px] h-[54px]">Sign up</Link>
            </div>
        </div>
    );
};

export default Navber;