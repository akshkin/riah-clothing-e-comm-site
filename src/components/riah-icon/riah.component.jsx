import {ReactComponent as Logo} from "../../assets/RIAH.svg"
import "./riah.styles.css"

function LogoIcon(){
    return (
        <div className="logo-container">
            <Logo className="bag-icon" />
        </div>
    )
}

export default LogoIcon