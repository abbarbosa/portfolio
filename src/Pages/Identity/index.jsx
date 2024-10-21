import React from "react";
import Header from "../../Components/Header";
import { ReactComponent as Banner } from '../../Assets/banner.svg';

function Identity(){
    return(
        <div>
            <Header/>
            <text>identidades visuais</text>
            <Banner className="w-full mt-[10px]" />
        </div>
    )
}

export default Identity;