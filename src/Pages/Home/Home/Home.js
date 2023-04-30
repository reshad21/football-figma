import React from 'react';
import PlayerCard from '../../../components/PlayerCard';
import PlayerSkills from '../../../components/PlayerSkills';
import PolarChart from '../../../components/PolarChart';
import ProfileCard from '../../../components/ProfileCard';

const Home = () => {
    return (
        <div className='flex bg-[#F7F7F7] w-[88%] px-5 py-9 rounded-[12px] gap-5 justify-between'>
            <PlayerCard></PlayerCard>
            <div className="flex flex-col gap-5 w-[66%]">
                <div className='flex gap-5 w-full'>
                    <ProfileCard></ProfileCard>
                    <PolarChart></PolarChart>
                </div>
                <PlayerSkills></PlayerSkills>
            </div>
        </div>
    );
};

export default Home;