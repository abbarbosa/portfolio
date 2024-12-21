import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { GabiCheligaPosts, PlusDesignPosts, ViRicoPosts } from "../../Components/Carousel";

import gabiCheligaCapa from "../../Assets/logo-gabiCheliga.png";
import viRicoCapa from "../../Assets/logo-ViRico.png";
import plusDesignCapa from "../../Assets/logo-plus-design.png";

function SocialMedia() {
  return (
    <div className="bg-[#2D2D2D] min-h-screen">
      <Header />
      <div className="flex flex-col items-center gap-8 mt-8 px-4">
        {/* Plus Design Section */}
        <div className="bg-primary-purple w-full max-w-[800px] rounded-[20px] p-4">
          <div className="flex items-center gap-4">
            <img
              src={plusDesignCapa}
              className="rounded-full h-[50px] w-[50px]"
              alt="Logo Plus Design"
            />
            <h1 className="font-semibold text-complementary-white text-lg md:text-xl">
              Revista Plus Design
            </h1>
          </div>
          <PlusDesignPosts />
        </div>

        {/* Victoria Rico Section */}
        <div className="bg-complementary-white w-full max-w-[800px] rounded-[20px] p-4">
          <div className="flex items-center gap-4">
            <img
              src={viRicoCapa}
              className="rounded-full h-[50px] w-[50px]"
              alt="Logo Studio Victoria Rico"
            />
            <h1 className="font-semibold text-complementary-black text-lg md:text-xl">
              Studio Victoria Rico
            </h1>
          </div>
          <ViRicoPosts />
        </div>

        {/* Gabrielle Cheliga Section */}
        <div className="bg-primary-purple w-full max-w-[800px] rounded-[20px] p-4">
          <div className="flex items-center gap-4">
            <img
              src={gabiCheligaCapa}
              className="rounded-full h-[50px] w-[50px]"
              alt="Logo Gabrielle Cheliga"
            />
            <h1 className="font-semibold text-complementary-white text-lg md:text-xl">
              Advogada Gabrielle Cheliga
            </h1>
          </div>
          <GabiCheligaPosts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SocialMedia;
