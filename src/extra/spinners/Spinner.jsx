import React from 'react';
import { LineWave } from "react-loader-spinner";
import './spinners.css';
const Spinner = () => {
    return (
        <div className='loader'>
            <LineWave
  color="blue"
  height={110}
  width={110}
  ariaLabel="three-circles-rotating"
/>
        </div>
    );
};

export default Spinner;