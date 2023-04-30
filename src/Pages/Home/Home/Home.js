import React from 'react';
import PlayerCard from '../../../components/PlayerCard';
import PolarChart from '../../../components/PolarChart';
import ProfileCard from '../../../components/ProfileCard';

const Home = () => {
    return (
        <div className='flex bg-[#F7F7F7] w-[88%] px-5 py-9 rounded-[12px] gap-5'>
            <div>
                <PlayerCard></PlayerCard>
            </div>
            <div className='flex gap-5'>
                <div className="">
                    <ProfileCard></ProfileCard>
                </div>
                <div className="">
                    <PolarChart></PolarChart>
                </div>
            </div>
        </div>
    );
};

export default Home;