import {Navbar} from "../components/Navbar"
import Hero from "../components/Hero"
import Movies from "./Movies"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Movies />
        <Footer />
    </>
  )
}

export default Layout