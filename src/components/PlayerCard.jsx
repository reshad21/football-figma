import React from 'react';
import playerIcon from '../assets/portrait-professional-soccer-player-red-shirt-isolated-white 1.png';
const PlayerCard = () => {
    return (
        <div className="card bg-base-100 w-[32%] py-3 rounded-md">
            <div className="flex flex-col justify-center items-center ">
                <figure className=''>
                    <img src={playerIcon} alt="Shoes" className='w-[152px] h-[152px] rounded-full border-2 border-[#FD413B] p-2' />
                </figure>
                <h1 className='text-[#14314E] font-my-font font-semibold text-[28px]'>Ronaldo Zuniga</h1>
                <span className='text-[#8C8C8C] font-my-font text-[16px] font-medium'>Atletico Huila</span>
            </div>

            <div className="divider"></div>

            <div className="cradTable px-4">
                <div className="overflow-x-auto">
                    <table className="table-compact w-full">
                        <tbody>
                            <tr>
                                <td className='w-[90px]'>Height</td>
                                <td>:</td>
                                <td className='font-bold'>6’2”</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>:</td>
                                <td className='font-bold'>194kg</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>:</td>
                                <td className='font-bold'>27</td>
                            </tr>
                            <tr>
                                <td>Foot</td>
                                <td>:</td>
                                <td className='font-bold'>Right</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="divider"></div>

            <div className="flex flex-col justify-center items-center gap-3 px-4">
                <div className='w-full'>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Position</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div className='w-full'>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Season</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div className='w-full'>
                    <select className="select select-bordered w-full">
                        <option disabled selected>League</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div className='w-full'>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Team</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;