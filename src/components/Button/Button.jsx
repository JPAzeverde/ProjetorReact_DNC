import './Button.css'
import Arow from '../../assets/arow.svg'

function Button({arrow, buttonStyle, loading, children, ...props}){
    return(
        <>
            <button className={`button ${buttonStyle}`}{...props}>
                {children} {arrow && <img src={Arow}/>}
            </button>
        </>
    )
}

export default Button