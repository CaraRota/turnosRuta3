import React from "react";
import companyLogo from "../assets/companyLogo.png";
import camiaHnosLogo from "../assets/camiahnosLogo.jpg";
import "../index.css";

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <img src={companyLogo} alt='Company Logo' className='h-16 w-auto mt-5' />
            <img src={camiaHnosLogo} alt='Camia Hnos Logo' className='h-16 w-auto mt-5' />
        </div>
    );
};

export default Header;
