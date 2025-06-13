import { useContext } from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'

import Logo from '../../assets/logo.svg'
import BrasilIcon from '../../assets/br.svg'
import UsaIcon from '../../assets/usa.svg'
import FaceIcon from '../../assets/fb-icon.svg'
import LinkedIcon from '../../assets/li-icon.svg'
import InstaIcon from '../../assets/ins-icon.svg'
import TwtIcon from '../../assets/tt-icon.svg'


import './Footer.css'


import { AppContext } from '../../contexts/AppContext'


function Footer(){

    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return(
        <>
            <footer>
                <div className="container">
                    <div className='d-flex jc-space-between mobile-fd-column'>
                        <div className='footer-logo-col'>
                            <img src={Logo} className='footer-logo' />
                            <p className='grey1-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                            <div className='d-flex social-links jc-space-between'>
                                <a href="" target='_blank'>
                                    <img src={FaceIcon}/>
                                </a>
                                <a href="" target='_blank'>
                                    <img src={InstaIcon}/>
                                </a>
                                <a href="" target='_blank'>
                                    <img src={LinkedIcon}/>
                                </a>
                                <a href="" target='_blank'>
                                    <img src={TwtIcon}/>
                                </a>
                            </div>
                            
                        </div>
                        <div className='d-flex'>
                            <div className='footer-col'>
                                <h3>{appContext.languages[appContext.language].general.pages}</h3>
                                <ul className='d-flex fd-column'>
                                    <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                    <li><Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                                    <li><Link to="/Projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                    <li><Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='footer-col'>
                                <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className="grey1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey1-color">suporte@escoladnc.com.b</p>
                            <p className="grey1-color">(19) 99187-4342</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="d-flex jc-space-between footer-copy">
                        <p className="grey1-color">Copyright © DNC - 2024</p>
                        <div className="d-flex langs-area">

                            <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')} >
                                <img src={BrasilIcon} height="29px"/>
                            </Button>

                            <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                                <img src={UsaIcon} height="29px"/>
                            </Button>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer