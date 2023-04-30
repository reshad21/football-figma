import React from 'react';
import Table from '../../../components/HomepageTable/Table';
import PlayerCard from '../../../components/PlayerCard';
import PlayerSkills from '../../../components/PlayerSkills';
import PolarChart from '../../../components/PolarChart';
import ProfileCard from '../../../components/ProfileCard';

const Home = () => {
    return (
        <div className='w-[88%] flex flex-col py-9'>
            <div className='flex bg-[#F7F7F7] w-[100%] px-5 py-9 rounded-[12px] gap-5 justify-between'>
                <PlayerCard></PlayerCard>
                <div className="flex flex-col gap-5 w-[66%]">
                    <div className='flex gap-5 w-full'>
                        <ProfileCard></ProfileCard>
                        <PolarChart></PolarChart>
                    </div>
                    <PlayerSkills></PlayerSkills>
                </div>
            </div>
            <div className="bg-[#F7F7F7] w-[100%] px-5 pb-5">
                <Table></Table>
            </div>
        </div>
    );
};

export default Home;