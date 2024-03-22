import React from "react";
import truckBG from "../../assets/truckBG.jpg";

const Background = () => {
    return (
        <>
            <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'></div>
            <img
                src={truckBG}
                alt='Camion de Fondo'
                className='absolute bottom-0 z-[-2] w-full'
                style={{
                    maskImage:
                        "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                    WebkitMaskImage:
                        "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                }}
            />
        </>
    );
};

export default Background;
