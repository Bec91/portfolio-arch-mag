import './Footer.scss'

// ICONS
import twtrIcon from '../../Assets/Icons/Icon-twitter.svg'
import instaIcon from '../../Assets/Icons/Icon-instagram.svg'
import facebkIcon from '../../Assets/Icons/Icon-facebook.svg'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__iconContainer">
                <a href="https://www.twitter.com/">
                    <img
                        className="footer__icon"
                        src={twtrIcon}
                        alt="twitter icon"
                    />
                </a>            
                <a href="https://www.instagram.com/">            
                    <img
                        className="footer__icon"
                        src={instaIcon}
                        alt="instagram icon"
                    />
                </a>
                <a href="https://www.facebook.com/">
                    <img
                        className="footer__icon"
                        src={facebkIcon}
                        alt="facebook icon"
                    />
                </a>
            </div>
            <div className="footer__copyright">
            <span>&#169;</span> Arch Magazine 2023
            </div>
        </div>
    )
}

export default Footer;