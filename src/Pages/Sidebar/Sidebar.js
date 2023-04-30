import React from 'react';
import { BiUserPin } from 'react-icons/bi';
import { BsFillPersonFill, BsFillPersonVcardFill, BsGraphUpArrow } from 'react-icons/bs';
import { FiFolder } from 'react-icons/fi';
import { MdOutlinePermIdentity, MdPeople } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const activeClass = {
        color: "white",
        backgroundColor: "#14314E",
    }
    return (
        <div className='w-[17%]'>
            <ul className="menu bg-base-100 p-2 rounded-box w-[100%]">
                <li>
                    <Link className='' style={activeClass}>
                        <BiUserPin className='w-[20px] h-[20px]' />
                        Name
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <BsGraphUpArrow className='w-[20px] h-[20px]' />
                        Metric
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <MdPeople className='w-[20px] h-[20px]' />
                        Create Team
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <BsFillPersonVcardFill className='w-[20px] h-[20px]' />
                        Player Market
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <BsFillPersonFill className='w-[20px] h-[20px]' />
                        Player Comparison
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <MdOutlinePermIdentity className='w-[20px] h-[20px]' />
                        Similar Player
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <FiFolder className='w-[20px] h-[20px]' />
                        GK Search
                    </Link>
                </li>

                <li>
                    <Link className="hover:bg-[#14314E] hover:text-white text-[#8C8C8C] font-semibold font-my-font[2]">
                        <RiTeamLine className='w-[20px] h-[20px]' />
                        Team Plot
                    </Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;