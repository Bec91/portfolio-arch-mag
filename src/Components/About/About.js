import './About.scss'
import Paragraph from '../Paragraph/Paragraph';

// IMAGES
import LondonArt from '../../Assets/Images/londonUKArtGal.jpg'
import PalaceOfJustice from '../../Assets/Images/palaceofJustice.jpg'
import Cathedral from '../../Assets/Images/cathedral.jpg'

// COMPONENTS
import Footer from '../Footer/Footer';

function About() {
    return(
        <>
            <div className="about">
                <div className="about__titleContain">
                    <h3 className="about__title">About</h3>
                </div>
                <div className="about__contentContain">
                    <div className="about__paragraph">
                        <Paragraph/>
                        <div className="about__imageContain">
                            <img src={LondonArt} alt="girl standing in front of building" className="about__image"/>
                        </div>
                    </div>
                    <div className="about__paragraph">
                        <div className="about__imageContain">
                            <img src={PalaceOfJustice} alt="girl standing in front of building" className="about__image"/>
                        </div>
                        <Paragraph/>
                    </div>
                    <div className="about__paragraph">
                        <Paragraph/>
                        <div className="about__imageContain">
                            <img src={Cathedral} alt="girl standing in front of building" className="about__image"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;