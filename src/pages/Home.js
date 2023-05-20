import '../assets/css/pages/home.css';
import background from '../assets/imgs/network-background.png';

export const Home = () => {
    return (
        <div className="home-wrap">
            <img className="home-bg" src={background}/>
            <header className="header-main">
                <div className="header-main__hamburger">
                    <div className="header-main__hamburger-item"></div>
                    <div className="header-main__hamburger-item"></div>
                    <div className="header-main__hamburger-item"></div>
                </div>
                <span className="header-main__heading">Synthesis</span>
            </header>
            <div className="connection">
                <button className="connection__btn">Connect</button>
                <div className="connection__additional">
                    <div className="connection__left">
                        <span>Best way</span>
                        <div className="connection__switch">
                            <div className="connection__circle"></div>
                        </div>
                    </div>
                    <div className="connection__right">
                        <span>Dynamic IP</span>
                        <div className="connection__switch">
                            <div className="connection__circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}