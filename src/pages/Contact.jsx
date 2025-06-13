import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ContactForms from "../components/ContactForms/ContactForms"
import Footer from "../components/Footer/Footer"

import { AppContext } from '../contexts/AppContext'
import { useContext } from 'react'







function Contact(){
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.contact} image="bannerContact.svg"/>
            <ContactForms/>
            <Footer/>
        </>
    )
}

export default Contact