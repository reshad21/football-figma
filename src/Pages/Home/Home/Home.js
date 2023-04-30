import React from 'react';
import PlayerCard from '../../../components/PlayerCard';
import PolarChart from '../../../components/PolarChart';
import ProfileCard from '../../../components/ProfileCard';

const Home = () => {
    return (
        <div className='flex bg-[#F7F7F7] w-[88%] px-5 py-9 rounded-[12px] gap-5'>
            <PlayerCard></PlayerCard>
            <div className="flex flex-col gap-5">
                <div className='flex gap-5'>
                    <ProfileCard></ProfileCard>
                    <PolarChart></PolarChart>
                </div>
                <div className="card bg-base-100 w-[100%] py-3 rounded-md ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio maxime, praesentium rerum quam eum minima minus itaque? Illum repudiandae dolorum ratione quam asperiores accusamus itaque! Velit deleniti aut placeat.
                </div>
            </div>
        </div>
    );
};

export default Home;