import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ProjectList from "../components/ProjectList/ProjectList"
import Footer from "../components/Footer/Footer"

import { AppContext } from '../contexts/AppContext'
import { useContext } from 'react'







function Projects(){
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.projects} image="bannerProjects.svg"/>
            <div className="container">
                <ProjectList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects