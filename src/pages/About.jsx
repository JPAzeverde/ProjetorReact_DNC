import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"

import { AppContext } from '../Contexts/AppContext'
import { useContext } from 'react'






function About(){
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.about} image="bannerAbout.svg"/>
            
                <AboutText/>
            
            <Footer/>
        </>
    )
}

export default About