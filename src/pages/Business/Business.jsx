import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

const businessImage = 'https://i.ibb.co/GWtPHsZ/Top-Relationship-Marketing-Strategies-blog-1536x627.png';

const Business = () => {
    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${businessImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 space-x-10 flex flex-col items-start px-44 space-y-10 justify-center text-white z-10 p-8">
                <h2 className="text-4xl md:text-5xl text-left font-bold mb-6">
                    Business Software. <br /> Our Craft. Our Passion.
                </h2>
                <div className="  space-y-10  uppercase justify-center text-center items-center">
                   <div className="flex space-x-20 text-center">
                   <Counter label="M+ Users Globally" />
                    <Counter label="Countries Served" />
                   </div>
                    <div className="flex space-x-20">
                    <Counter label="Employed" />
                    <Counter label="Years in Business" />
                    </div>
                    <div className="flex space-x-20">   
                    <Counter label="Partners" />
                    <button className="flex items-center border-2 p-3  rounded-lg text-white mt-6 focus:outline-none">
                    More About Us <IoMdArrowRoundForward className="ml-2" />
                </button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

const Counter = ({ label }) => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (value < getMaxValue(label)) {
                setValue(value + 1);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [value, label]);

    const getMaxValue = (label) => {
        switch (label) {
            case 'M+ Users Globally':
                return 100;
            case 'Countries Served':
                return 150;
            case 'Employed':
                return 120;
            case 'Years in Business':
                return 25;
            case 'Partners':
                return 470;
            default:
                return 0;
        }
    };

    return (
        <div className="text-left">
            <p className="text-3xl md:text-4xl font-semibold">{value}</p>
            <p className="text-sm md:text-base">{label}</p>
        </div>
    );
};

export default Business;
