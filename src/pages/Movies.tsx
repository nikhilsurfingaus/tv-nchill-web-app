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
import { db } from '../firebase'; // Import the `db` object from your firebase.js file
import {collection, getDocs} from 'firebase/firestore'
import { useState, useEffect } from 'react';



const Movies = () => {

      const scrollRef = useRef(null);
      // eslint-disable-next-line
      const scrollIndex = useScrollSnap({
        ref: scrollRef,
        duration: 20,
        delay: 0
      });

      //Import BaaS Firebase Likes Update As Well 
      const [oneLikes, setOneLikes] = useState(0);
      const [twoLikes, setTwoLikes] = useState(0);
      const [threeLikes, setThreeLikes] = useState(0);
      const [fourLikes, setFourLikes] = useState(0);
      const [fiveLikes, setFiveLikes] = useState(0);
      const [sixLikes, setSixLikes] = useState(0);
      const [sevenLikes, setSevenLikes] = useState(0);
      const [eightLikes, setEightLikes] = useState(0);
      const [nineLikes, setNineLikes] = useState(0);
      const [tenLikes, setTenLikes] = useState(0);


      useEffect(() => {
      const fetchLikesData = async () => {
            try {
            const counterCollectionRef = collection(db, 'shows');
            const querySnapshot = await getDocs(counterCollectionRef);

            querySnapshot.forEach((doc) => {
            const data = doc.data();
            const { rank, likes } = data;

            if (rank === 1) {
                  setOneLikes(likes);
            } else if (rank === 2) {
                  setTwoLikes(likes);
            } else if (rank === 3) {
                  setThreeLikes(likes);
            } else if (rank === 4) {
                  setFourLikes(likes);
            } else if (rank === 5) {
                  setFiveLikes(likes);
            } else if (rank === 6) {
                  setSixLikes(likes);
            } else if (rank === 7) {
                  setSevenLikes(likes);
            } else if (rank === 8) {
                  setEightLikes(likes);
            } else if (rank === 9) {
                  setNineLikes(likes);
            } else if (rank === 10) {
                  setTenLikes(likes);
            }
            });
            } catch (error) {
            console.error('Error fetching likes data:', error);
            }
      };

      fetchLikesData();
      }, []);



  return (
    <>
      <ScrollToTop smooth color="#1e90ff " />


      <div className="content" ref={scrollRef}>

            <Section likes={oneLikes}  bgColor={One.bg} youtubeUrl={One.url} title={One.title} blurb={One.blurb} images={One.slide} icon={<FaAmazon />} btn='dodgerblue' link={One.link} />

            <Section likes={twoLikes}  bgColor={Two.bg} youtubeUrl={Two.url} title={Two.title} blurb={Two.blurb} images={Two.slide} 
                  icon={<SiNetflix />} btn='crimson' link={Two.link} />

            
            <Section likes={threeLikes}  bgColor={Three.bg} youtubeUrl={Three.url} title={Three.title} blurb={Three.blurb} images={Three.slide} 
                  icon={<SiNetflix />} btn='crimson' link={Three.link} />

            <Section likes={fourLikes}  bgColor={Four.bg} youtubeUrl={Four.url} title={Four.title} blurb={Four.blurb} images={Four.slide} 
                  icon={<SiHbo />} btn='darkorchid' link={Four.link} />

            <Section likes={fiveLikes}  bgColor={Five.bg} youtubeUrl={Five.url} title={Five.title} blurb={Five.blurb} images={Five.slide} 
                  icon={<SiHulu />} btn='limegreen' link={Five.link} />

            
            <Section likes={sixLikes}  bgColor={Six.bg} youtubeUrl={Six.url} title={Six.title} blurb={Six.blurb} images={Six.slide} 
                  icon={<AiFillApple />} btn='black' link={Six.link} />

            <Section bgColor={Seven.bg} youtubeUrl={Seven.url} title={Seven.title} blurb={Seven.blurb} images={Seven.slide} 
                  icon={<FaAmazon />} btn='dodgerblue' link={Seven.link} />

            <Section likes={sevenLikes} bgColor={Seven.bg} youtubeUrl={Seven.url} title={Seven.title} blurb={Seven.blurb} images={Seven.slide} 
                  icon={<SiHulu />} btn='limegreen' link={Seven.link} />


            <Section likes={eightLikes} bgColor={Eight.bg} youtubeUrl={Eight.url} title={Eight.title} blurb={Eight.blurb} images={Eight.slide} 
                  icon={<FaAmazon />} btn='dodgerblue' link={Eight.link} />

            <Section bgColor={Nine.bg} youtubeUrl={Nine.url} title={Nine.title} blurb={Nine.blurb} images={Nine.slide} 
                  icon={<TbMountain />} btn='dodgerblue' link={Nine.link} />

            <Section bgColor={Ten.bg} youtubeUrl={Ten.url} title={Ten.title} blurb={Ten.blurb} images={Ten.slide} 
                  icon={<AiFillApple />} btn='black' link={Ten.link} />
            <Section likes={nineLikes}  bgColor={Nine.bg} youtubeUrl={Nine.url} title={Nine.title} blurb={Nine.blurb} images={Nine.slide} 
                  icon={<SiNetflix />} btn='crimson' link={Nine.link} />

            <Section likes={tenLikes}  bgColor={Ten.bg} youtubeUrl={Ten.url} title={Ten.title} blurb={Ten.blurb} images={Ten.slide} 
                  icon={<FaAmazon />} btn='dodgerblue' link={Ten.link} />
      </div>


    </>
  )
}

export default Movies