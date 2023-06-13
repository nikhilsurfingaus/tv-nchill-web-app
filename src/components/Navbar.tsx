import { FcFilmReel } from "react-icons/fc";
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{
        width: "50%",
        margin: "auto",
        borderRadius: "0 0 10px 10px",
        borderLeft: "dodgerblue	 solid 1px",
        borderRight: "dodgerblue	 solid 1px",
        borderBottom: "dodgerblue	 solid 1px",
        boxShadow: '0 0 30px 10px #48abe0'
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand mx-auto fw-bolder">
          <h3 className="animate__animated animate__slideInDown animate__slow title">
            <FcFilmReel size={60} className="me-1 mb-1" /> TV N'CHILL
          </h3>
        </div>
      </div>
    </nav>
  );
};