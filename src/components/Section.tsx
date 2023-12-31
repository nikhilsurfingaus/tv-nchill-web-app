import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Section.css'
import { Slide } from "react-awesome-reveal";
import {FiThumbsUp} from 'react-icons/fi'
import {useState} from 'react'
import {FaThumbsUp} from 'react-icons/fa'

interface Props {
  bgColor: string;
  youtubeUrl: string;
  title: string;
  blurb: string;
  images: string[];
  btn: string;
  icon: any;
  link: string;
  likes: number;
}

const Section: React.FC<Props> = ({ bgColor, youtubeUrl, title, blurb, images, btn, icon, link, likes }) => {

  const [clickThumb, setClickThumb] = useState(false);

  const handleClick = () => {
    //Only Enter Once Session
    if (!clickThumb) { 
      setClickThumb(true);
    }
    return
  }

  return (
    <div className='main' style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>

      <div className='youtube' style={{ width: '30%', height: '40%', paddingBottom: '0%' }}>
        <iframe
          title="YouTube video"
          src={youtubeUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ top: 0, left: 0, width: '100%', height: '100%', 
          borderRadius: '5px', boxShadow: '0 0 10px 5px #48abe0'
        }}
        />
      </div>
      <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
      <div className='blurb' style={{ width: '60%', padding: '20px', color: 'white', textAlign: 'center' }}>
        <Slide direction="left">

        <h1 style={{ fontSize: '2rem' }}>{title}</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ maxWidth: '400px'}}>{blurb}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={link} target="_blank" rel="noreferrer">
                <button style={{ background: btn }} className='btn text-white'>
                    Watch Now {icon}
                </button>
            </a>
            <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center',marginLeft: '10px', marginTop: '5px', fontWeight: 'bold'}}>
              {clickThumb ? <FaThumbsUp size={20} style={{cursor: 'pointer'}} />  : <FiThumbsUp onClick={() => handleClick() } size={20} style={{cursor: 'pointer'}} />} <span  style={{marginLeft: '5px'}}>+{likes}k</span>
            </div>
        </div>
        </Slide>
        </div>

        <div className='slide' style={{ overflowX: 'hidden', overflowY: 'hidden'}}>

          <SimpleImageSlider
            width={500}
            height={300}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
    
        </div>
      </div>
    </div>
  );
};

export default Section;
