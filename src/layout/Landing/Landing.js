import Navbar from "../../component/navbar";
import About from "../../component/about";
import Business from "../../component/business";
import Partners from "../../component/partners";
import Token from "../../component/token";
import Newsletter from "../../component/newsletter";
import Journey from "../../component/journey";
import Footer from "../../component/footer";
const Landing = ()=>{
    return(
        <>
        <Navbar />
        <About />
        <Business />
        <Partners />
        <Token />
        <Newsletter />
        <Journey />
        <Footer />
        </>
    )
}

export default Landing