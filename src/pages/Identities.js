import { Header } from "../components/Header";
import '../assets/css/pages/identities.css'
import { ListOfKeys } from "../components/ListOfKeys";

export const Identities = () => {
    return (
        <div className="identities">
            <Header pageName={"Identities"}/>
            <div className="identities__heading-block">
                <p className="identities__heading">Keys</p>
            </div>
            <ListOfKeys/>
        </div>
    )
}