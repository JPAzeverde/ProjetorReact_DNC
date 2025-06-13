import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import ProjectList from "../components/ProjectList/ProjectList"
import Footer from "../components/Footer/Footer"

function Home(){
    return(
        <>
            <Header/>
            <div className="container">
                <Hero/>
                <ProjectList/>
            </div>
            <Footer/>
        </>
    )
}

export default Home