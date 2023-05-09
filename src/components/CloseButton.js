import close from "../assets/imgs/close-btn.svg";
import '../assets/css/components/close-btn.css';

export const CloseButton = ({margin}) => {
    return (
        <button style={{margin: margin}} className="close-btn">
            <img src={close} alt="close"/>
        </button>
    )
}