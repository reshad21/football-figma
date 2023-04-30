import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerSkills = () => {
    const [Aerial, AerialValue] = useState(10);
    const [setPlay, setPlayValue] = useState(10);
    const [Dribbling, setDribblingValue] = useState(10);
    const [Tackling, setTacklingValue] = useState(10);

    const rangeSliderStyles = {
        rangeSlider: {
            WebkitAppearance: 'none',
            width: '90%',
            height: '10px',
            background: 'linear-gradient(to right, #00FF7F, #FF6347)',
            outline: 'none',
            opacity: '0.7',
            transition: 'opacity .2s',
            borderRadius: '5px',
            margin: '10px',
        },
        rangeSliderThumb: {
            WebkitAppearance: 'none',
            // appearance: 'none',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            cursor: 'pointer',
            background: 'white',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        },
        rangeSliderThumbCustom: {
            background: 'url(`../assets/Group 257.png`) center center no-repeat',
            backgroundSize: '50% 50%',
            border: 'none',
        },
        rangeSliderThumbActive: {
            backgroundColor: 'red',
        }
    };


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
                    <input type="range" min="0" max="100" value={Aerial} onChange={e => AerialValue(e.target.value)} style={rangeSliderStyles.rangeSlider} />
                </div>

                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Aerial Set-Play</span>
                        <span>{setPlay}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={setPlay} onChange={e => setPlayValue(e.target.value)} style={rangeSliderStyles.rangeSlider} />
                </div>

                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Dribbling</span>
                        <span>{Dribbling}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={Dribbling} onChange={e => setDribblingValue(e.target.value)} style={rangeSliderStyles.rangeSlider} />
                </div>

                <div className="skills border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span>Tackling</span>
                        <span>{Tackling}/100</span>
                    </div>
                    <input type="range" min="0" max="100" value={Tackling} onChange={e => setTacklingValue(e.target.value)} style={rangeSliderStyles.rangeSlider} />
                </div>
            </div>




        </div>
    );
};

export default PlayerSkills;