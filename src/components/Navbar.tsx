import { FcFilmReel } from "react-icons/fc";

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
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand mx-auto fw-bold">
          <h3 className="animate__animated animate__slideInDown animate__slow">
            <FcFilmReel size={30} className="me-1" /> TV N'CHILL
          </h3>
        </div>
      </div>
    </nav>
  );
};