import React from "react";
import Header from "../../Components/Header";
import { ReactComponent as Banner } from '../../Assets/banner.svg';

function Develop(){
    return(
        <div>
            <Header/>
            <Banner className="w-full mt-[10px]" />
        </div>
    )
}

export default Develop;