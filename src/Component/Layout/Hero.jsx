import LogImg from "../../Images/herob.jpg";
import fruit from "../../Images/fruitCat.png";
import veg from "../../Images/vegCat.png";
import grain from "../../Images/grainCat.png";
import fert from "../../Images/fertiCat.png";
import equip from "../../Images/eqCat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <hero className="pt-20" >
      <div
        className="bg-cover bg-center h-[100vh] relative]"
        style={{ backgroundImage: `url(${LogImg})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center text-white text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl inset-0 font-semibold mb-4">Agricur</h1>
            <p className="text-lg mb-2">
              Your Trusted Partner in Agriculture Excellence
            </p>
            <div className="text-black">
              <div className=" overflow-x-auto whitespace-nowrap text-lg font-bold ">
                <Link to="/fruits">
                  <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 inline-block ">
                    <div className="bg-white hover:bg-white bg-opacity-70 rounded-lg shadow-lg p-6">
                      <img
                        src={`${fruit}`}
                        alt=""
                        className="mb-4 rounded-lg"
                      />
                      Fruits
                    </div>
                  </div>
                </Link>
                <Link to="/vegetables">
                  <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 inline-block">
                    <div className="bg-white hover:bg-white bg-opacity-70 rounded-lg shadow-lg p-6">
                      <img src={`${veg}`} alt="" className="mb-4 rounded-lg" />
                      Vegetables
                    </div>
                  </div>
                </Link>
                <Link to="/grains">
                  <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 inline-block">
                    <div className="bg-white hover:bg-white bg-opacity-70 rounded-lg shadow-lg p-6">
                      <img
                        src={`${grain}`}
                        alt=""
                        className="mb-4 rounded-lg"
                      />
                      Grains
                    </div>
                  </div>
                </Link>
                <Link to="/fertilizers">
                  <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 inline-block">
                    <div className="bg-white hover:bg-white bg-opacity-70 rounded-lg shadow-lg p-6">
                      <img src={`${fert}`} alt="" className="mb-4 rounded-lg" />
                      Fertilizers
                    </div>
                  </div>
                </Link>
                <Link to="/equipments">
                  <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 inline-block">
                    <div className="bg-white hover:bg-white bg-opacity-70 rounded-lg shadow-lg p-6">
                      <img
                        src={`${equip}`}
                        alt=""
                        className="mb-4 rounded-lg"
                      />
                      Equipments
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-white text-center absolute left-1/2 transform -translate-x-1/2 lg:hidden">
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  className="text-3xl mx-2"
                />
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className="text-3xl mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </hero>
  );
};

export default HeroSection;
