import { UpdateKeyButton } from './UpdateKeyButton';
import '../assets/css/components/key.css';

export const Key = ({ num }) => {
    return (
        <div className="key">
            <UpdateKeyButton margin={"0 0 0 30px"}/>
            <span className="key__num">{num > 0 ? num : ""}123</span>
        </div>
    )
}