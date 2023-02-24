import './Home.scss';
import Paragraph from '../Paragraph/Paragraph';
import GirlAndBuilding from '../../Assets/Images/girlAndBuilding.jpg'
import OutdoorBuilding from '../../Assets/Images/outdoorBuilding.jpg'

function Home() {
    return (
        <div className="home">
            <h3 className="home__title">Vestibulum Dictum Nulla</h3>
            <Paragraph/>
            <div className="home__imageContainer">
                <img src={GirlAndBuilding} alt="girl standing in front of building" className="home__image"/>
            </div>
            <Paragraph/>
            <img src={OutdoorBuilding} alt="girl standing in front of building" className="home__image--two"/>
            <Paragraph/>
        </div>
    )
}

export default Home;