import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
    return (
        <div className='card bg-base-100 w-[385px] py-3 rounded-md'>
            <div className="cardHeader pb-3 px-4">
                <Link className='btn w-[102px] h-[38px] rounded-full mr-2 bg-[#14314E]'>Profile</Link>
                <Link className='btn w-[102px] h-[38px] rounded-full btn-outline'>Position</Link>
            </div>

            <div className="cardBody">
                <div className="items flex justify-between items-center px-4">
                    <span>Team</span>
                    <span className='font-bold'>Atletico</span>
                </div>
                <div className="divider m-0"></div>
                <div className="items flex justify-between items-center px-4">
                    <span>Position</span>
                    <span className='font-bold'>LW</span>
                </div>
                <div className="divider m-0"></div>
                <div className="items flex justify-between items-center px-4">
                    <span>Minutes</span>
                    <span className='font-bold'>346</span>
                </div>
                <div className="divider m-0"></div>
                <div className="items flex justify-between items-center px-4">
                    <span>Rating</span>
                    <span className='font-bold'>--</span>
                </div>
                <div className="divider m-0"></div>
                <div className="items flex justify-between items-center px-4">
                    <span>Model Reliability</span>
                    <span className='font-bold'>Low</span>
                </div>
                <div className="divider m-0"></div>
                <div className="items flex justify-between items-center px-4">
                    <span>GBE Points</span>
                    <span className='font-bold'>--</span>
                </div>
                <div className="divider m-0"></div>

                <div className="items flex justify-between items-center px-4">
                    <span>Non-Penalty Goals <br /> (Position)</span>
                    <span className='font-bold'>--</span>
                </div>
                <div className="divider m-0"></div>

                <div className="items flex justify-between items-center px-4">
                    <span>Non-Penalty Goals <br /> (All Position)</span>
                    <span className='font-bold'>1</span>
                </div>
                <div className="divider m-0"></div>
            </div>

        </div>
    );
};

export default ProfileCard;