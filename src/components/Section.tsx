import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  bgColor: string;
  youtubeUrl: string;
  title: string;
  blurb: string;
  images: string[];
  btn: string;
  icon: any;
  link: string;
}

const Section: React.FC<Props> = ({ bgColor, youtubeUrl, title, blurb, images, btn, icon, link }) => {
  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
      <div style={{ width: '30%', height: '40%', paddingBottom: '0%' }}>
        <iframe
          title="YouTube video"
          src={youtubeUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
      <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ width: '40%', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>{title}</h1>
        <p style={{ maxWidth: '400px' }}>{blurb}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={link} target="_blank" rel="noreferrer">
                <button style={{ background: btn }} className='btn text-white'>
                    Watch Now {icon}
                </button>
            </a>
        </div>
        </div>

        <div style={{ }}>
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