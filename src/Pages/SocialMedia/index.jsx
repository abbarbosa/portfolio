import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { PlusDesignPosts, ViRicoPosts } from "../../Components/Carousel";

function SocialMedia() {

    return (

        <div className="bg-[#2D2D2D] min-h-screen">
            <Header />
            <div className="flex items-center justify-center">
                <div className="bg-primary-purple h-[500px] w-[800px] rounded-[20px] mt-[50px]">
                    <div className="flex items-center gap-4 p-5">
                        <div className="rounded-full h-[50px] w-[50px] bg-complementary-white" > </div>
                        <h1 className="font-semibold text-complementary-white" >Revista Plus Design</h1>
                    </div>
                    <PlusDesignPosts />
                </div>
            </div>

            <div className="flex items-center justify-center mt-[50px]">
                <div className="bg-complementary-white h-[500px] w-[800px] rounded-[20px] mt-[50px]">
                    <div className="flex items-center gap-4 p-5">
                        <div className="rounded-full h-[50px] w-[50px] bg-complementary-black" > </div>
                        <h1 className="font-semibold text-complementary-black" >Studio Victoria Rico</h1>
                    </div>
                    <ViRicoPosts />
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default SocialMedia;