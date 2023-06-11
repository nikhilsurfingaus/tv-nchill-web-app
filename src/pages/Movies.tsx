import Section from "../components/Section"
import {FaAmazon} from 'react-icons/fa'

//IKWYDLS
import { One } from "../assets/showData"

const Movies = () => {

  return (
    <>
       <Section bgColor={One.bg} youtubeUrl={One.url} title={One.title} blurb={One.blurb} images={One.slide} 
            icon={<FaAmazon />} btn='dodgerblue' link={One.link} />
    </>
  )
}

export default Movies