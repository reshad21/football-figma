import React from 'react';
import PlayerCard from '../../../components/PlayerCard';

const Home = () => {
    return (
        <div className='flex bg-[#F7F7F7] w-[88%] px-5 py-9 rounded-[12px] gap-5'>
            <div>
                <PlayerCard></PlayerCard>
            </div>
            <div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, distinctio consequuntur. Ab, itaque illo? Explicabo, voluptate quaerat, quod minima impedit ut iure similique, suscipit necessitatibus dicta pariatur reiciendis! Quos, beatae?</div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae, ab optio dignissimos rerum sequi, maiores aliquid nihil officiis ratione nobis perspiciatis libero totam quisquam impedit ducimus corporis eveniet dolore?</div>
            </div>
        </div>
    );
};

export default Home;