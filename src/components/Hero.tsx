import './Hero.css'
import Lottie from 'lottie-react';
import animationData from '../animation/couch.json';
import {AiOutlineArrowDown} from 'react-icons/ai'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="contain text-white">
            <div className="container d-flex align-items-center justify-content-center vh-100 animate__animated animate__fadeIn">
      <div className="row align-items-stretch">
        <div className="col-lg-6 mb-4 d-flex flex-column justify-content-between float">
          <div className="floating-text-box p-4 rounded  text-center">
            <div className="mt-3">
              <h2 style={{fontSize: "6rem"}} className="text-white">
                TOP 10 TV SERIES
              </h2>
              <h3 style={{fontSize: "3rem", color: "dodgerblue"}}>
              <Typewriter
                  options={{
                    strings: [
                      "Amazon Prime TV",
                      "Netflix", "Hulu", "Peacook", "HBO", "Apple TV"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h3>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <div className='d-flex align-items-center text-white fw-bold' >
                <AiOutlineArrowDown size={100} className="me-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <div>
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero