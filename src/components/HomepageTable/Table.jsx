import React from 'react';
import './Table.css';
const Table = () => {
    return (
        <div className='card bg-base-100 w-[100%] rounded-md p-5'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th class="larger-padding">Team</th>
                        <th>League</th>
                        <th>Season</th>
                        <th id="cell-border">Minutes</th>
                        <th><span>Ball</span> <br /> <span>Progression</span></th>
                        <th><span>Shot</span> <br /> <span>Creation</span></th>
                        <th>Set-Plays</th>
                        <th id="cell-border"><span>Retention</span> <br /> <span>Retention</span></th>
                        <th><span>Defending</span> <br /> <span>Impact</span></th>
                        <th id="cell-border"><span>Defending</span> <br /> <span>Frequency</span></th>
                        <th>Off</th>
                        <th>Def</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="row-border">
                        <td class="larger-padding">Atletico Huila</td>
                        <td>COL1</td>
                        <td>2021</td>
                        <td id="cell-border">346</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td id="cell-border">81</td>
                        <td>15</td>
                        <td id="cell-border">42</td>
                        <td>-0.13</td>
                        <td>-0.03</td>
                        <td><span className='bg-red-300 rounded-md'>-0.16</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Table;