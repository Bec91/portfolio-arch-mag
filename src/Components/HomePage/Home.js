import './Home.scss';
import Paragraph from '../Paragraph/Paragraph';
import girlAndBuilding from '../../Assets/Images/girlAndBuilding.jpg'
function Home() {
    return (
        <div className="home">
            <h3 className="home__title">Vestibulum Dictum Nulla</h3>
            <Paragraph/>
            <img src={girlAndBuilding} alt="girl standing in front of building" className="home__image"/>
            <Paragraph/>
            <Paragraph/>
        </div>
    )
}

export default Home;