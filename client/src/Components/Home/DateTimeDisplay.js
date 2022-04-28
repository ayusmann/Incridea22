import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={`p-2 sm:p-3 lg:p-4 bg-opacity-30 backdrop-blur-lg rounded-md bg-gray-900 ${isDanger ? 'text-red-500 ' : 'text-[#9d7643]'}`}>
            <div className='text-5xl sm:text-6xl  md:tex-7xl xl:text-8xl '>{value < 10 ? `0${value}` : value}</div>
            <span className='text-[14px] sm:text-base  text-gray-100/80'>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;