import './Home.scss';
import Paragraph from '../Paragraph/Paragraph';
import GirlAndBuilding from '../../Assets/Images/girlAndBuilding.jpg'
import Hallway from '../../Assets/Images/hallway.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home__titleContainer">
                <h3 className="home__title">Vestibulum Dictum Nulla</h3>
            </div>
            <div className="home__contentContainer">
                <div className="home__paraContainer">
                    <Paragraph/>
                    <Paragraph/>
                </div>
                <div className="home__imageContainer">
                    <img src={GirlAndBuilding} alt="girl standing in front of building" className="home__image"/>
                </div>
            </div>
            <div className="home__titleContainer">
                <h3 className="home__title">Vestibulum Dictum Nulla</h3>
            </div>
            <div className="home__contentContainer">
                <div className="home__paraContainer">
                    <Paragraph/>
                    <Paragraph/>
                </div>
                <div className="home__imageContainer">
                    <img src={Hallway} alt="girl standing in front of building" className="home__image home__image--two"/>
                </div>
            </div>

        </div>
    )
}

export default Home;