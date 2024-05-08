import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";


const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, i am <span className="font-semibold">Velizar</span> 👋 <br /> A Junior
            Frontend Developer
          </h1>
        );
    
      if (currentStage === 2) {
        return (
          <div className='info-box'>
            <p className='font-medium sm:text-2xl text-center'>
            Worked with new popular<br /> UI and 3D Libraries.
            </p>
    
            <Link to='/about' className='neo-brutalism-white neo-btn'>
              Learn more
              <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
          </div>
        );
      }
      if (currentStage === 3) {
        return (
          <div className='info-box'>
            <p className='font-medium text-center sm:text-xl'>
              Give a chance to my projects <br /> Do you like it?
            </p>
    
            <Link to='/projects' className='neo-brutalism-white neo-btn'>
              Visit my portfolio
              <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
          </div>
        );
      }
    
      if (currentStage === 4) {
        return (
          <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Need a project done or looking for a dev? <br/> I'm just looking for a new job!
          </p>
    
          <Link to='/contact' className='neo-brutalism-white neo-btn'>
            Let's talk
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
        );
      }
    
      return null;
};

export default HomeInfo;
