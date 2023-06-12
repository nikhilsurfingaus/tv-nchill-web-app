import './Footer.css'
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center fw-bold">
      <div className="container py-5">
        <Slide direction="down">
            <p className="m-0"> Made With <span role="img">💙</span> By Nikhil Naik</p>
        </Slide>
      </div>
    </footer>
  );
}

export default Footer;
