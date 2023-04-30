import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerSkills = () => {
    const [Aerial, AerialValue] = useState(10);
    const [setPlay, setPlayValue] = useState(10);
    const [Dribbling, setDribblingValue] = useState(10);
    const [Tackling, setTacklingValue] = useState(10);
    return (
        <div className='card bg-base-100 w-[100%] rounded-md p-5'>
            <div className="cardHeader pb-3">
                <Link className='btn h-[38px] rounded-full mr-2 bg-[#14314E]'>Dual Rating</Link>
                <Link className='btn h-[38px] rounded-full btn-outline'>Finish/Saving</Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Aerial</span>
                        <span>{Aerial}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={Aerial} onChange={e => AerialValue(e.target.value)} className="" />
                </div>

                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Aerial Set-Play</span>
                        <span>{setPlay}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={setPlay} onChange={e => setPlayValue(e.target.value)} className="" />
                </div>

                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Dribbling</span>
                        <span>{Dribbling}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={Dribbling} onChange={e => setDribblingValue(e.target.value)} className="" />
                </div>

                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Tackling</span>
                        <span>{Tackling}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={Tackling} onChange={e => setTacklingValue(e.target.value)} className="" />
                </div>
            </div>




        </div>
    );
};

export default PlayerSkills;