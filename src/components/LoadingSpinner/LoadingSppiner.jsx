
/*  css  */ 
import "./LoadingSppiner.css"

import loadingSpinnerGif from '../../assets/SpinnerLoading.gif'



function LoadingSppiner(){
    return(
        <div className="loading-overlay-container d-flex al-center jc-center fd-column">
            <img src={loadingSpinnerGif} height="80px"/>
            <p>Loading...</p>
        </div>
    )
}

export default LoadingSppiner