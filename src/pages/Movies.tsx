import Section from "../components/Section"
import {FaAmazon} from 'react-icons/fa'
import {SiNetflix} from 'react-icons/si'
import {SiHbo} from 'react-icons/si'
import {SiHulu} from 'react-icons/si'
import {AiFillApple} from 'react-icons/ai'
import ScrollToTop from "react-scroll-to-top";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import {TbMountain} from 'react-icons/tb'

//IKWYDLS
import { One } from "../assets/showData"

//OBX
import { Two } from "../assets/showData"

//PB
import { Three } from "../assets/showData"

//Eup
import { Four } from "../assets/showData"

//Res
import { Five } from "../assets/showData"

//Home
import { Six } from "../assets/showData"

//One Of Us
import { Seven } from "../assets/showData"

//Per
import { Eight } from "../assets/showData"

//One Of Us
import { Nine } from "../assets/showData"

//Per
import { Ten } from "../assets/showData"



const Movies = () => {

      const scrollRef = useRef(null);
      // eslint-disable-next-line
      const scrollIndex = useScrollSnap({
        ref: scrollRef,
        duration: 20,
        delay: 0
      });


  return (
    <>
      <ScrollToTop smooth color="#1e90ff " />


      <div className="content" ref={scrollRef}>

            <Section bgColor={One.bg} youtubeUrl={One.url} title={One.title} blurb={One.blurb} images={One.slide} 
            icon={<FaAmazon />} btn='dodgerblue' link={One.link} />

            <Section bgColor={Two.bg} youtubeUrl={Two.url} title={Two.title} blurb={Two.blurb} images={Two.slide} 
                  icon={<SiNetflix />} btn='crimson' link={Two.link} />

            
            <Section bgColor={Three.bg} youtubeUrl={Three.url} title={Three.title} blurb={Three.blurb} images={Three.slide} 
                  icon={<SiNetflix />} btn='crimson' link={Three.link} />

            <Section bgColor={Four.bg} youtubeUrl={Four.url} title={Four.title} blurb={Four.blurb} images={Four.slide} 
                  icon={<SiHbo />} btn='darkorchid' link={Four.link} />

            <Section bgColor={Five.bg} youtubeUrl={Five.url} title={Five.title} blurb={Five.blurb} images={Five.slide} 
                  icon={<SiHulu />} btn='limegreen' link={Five.link} />

            
            <Section bgColor={Six.bg} youtubeUrl={Six.url} title={Six.title} blurb={Six.blurb} images={Six.slide} 
                  icon={<AiFillApple />} btn='black' link={Six.link} />

            <Section bgColor={Seven.bg} youtubeUrl={Seven.url} title={Seven.title} blurb={Seven.blurb} images={Seven.slide} 
                  icon={<FaAmazon />} btn='dodgerblue' link={Seven.link} />

            <Section bgColor={Eight.bg} youtubeUrl={Eight.url} title={Eight.title} blurb={Eight.blurb} images={Eight.slide} 
                  icon={<FaAmazon />} btn='dodgerblue' link={Eight.link} />

            <Section bgColor={Nine.bg} youtubeUrl={Nine.url} title={Nine.title} blurb={Nine.blurb} images={Nine.slide} 
                  icon={<TbMountain />} btn='dodgerblue' link={Nine.link} />

            <Section bgColor={Ten.bg} youtubeUrl={Ten.url} title={Ten.title} blurb={Ten.blurb} images={Ten.slide} 
                  icon={<AiFillApple />} btn='black' link={Ten.link} />

      </div>


    </>
  )
}

export default Movies