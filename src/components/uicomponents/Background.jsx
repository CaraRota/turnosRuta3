import React, { useEffect, useState } from "react";
import morningBackground from "../../assets/truckBG3.jpg";
import middayBackground from "../../assets/truckBG2.jpg";
import afternoonBackground from "../../assets/truckBG.jpg";
import eveningBackground from "../../assets/truckBG4.jpg";
import nightBackground from "../../assets/truckBG5.jpg";

const handleBackground = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 10) {
        return morningBackground;
    } else if (currentHour >= 10 && currentHour < 13) {
        return middayBackground;
    } else if (currentHour >= 13 && currentHour < 16) {
        return afternoonBackground;
    } else if (currentHour >= 16 && currentHour < 19) {
        return eveningBackground;
    } else {
        return nightBackground;
    }
};

const Background = () => {
    const [background, setBackground] = useState(handleBackground());

    useEffect(() => {
        const interval = setInterval(() => {
            setBackground(handleBackground());
        }, 3600000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'></div>
            <img
                src={background}
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
