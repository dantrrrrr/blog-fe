import './footer.css'
import { FiChevronRight, FiSend } from 'react-icons/fi'

function Footer() {
    const today = new Date();
    return (
        <div className="footer">
            <div className="ftContact">
                <div className="contactText">
                    <small>Keep in touch</small>
                    <h2>For more infomation</h2>
                </div>
                <div className="contactInput">
                    <input type="text" className='' />
                    <button className="btn"  data-aos='fade-left'>
                        SEND
                        <FiSend className="icon" />
                    </button>
                </div>
            </div>
            <div className="ftLinks">
                <div className="linkGroup" data-aos='fade-right'>
                    <li className="ftListItem">
                        <FiChevronRight />Facebook
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Instagram
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Telegram
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Youtube
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />LinkedIn
                    </li>
                </div>
                <div className="linkGroup" data-aos='fade-right'>
                    <li className="ftListItem">
                        <FiChevronRight />About
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Coin
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Crypto
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Bitcoin
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Ethereum
                    </li>
                </div>
                <div className="linkGroup" data-aos='fade-right'>
                    <li className="ftListItem">
                        <FiChevronRight />Code
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />Javascript
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />ReactJS
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />NodeJS
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight />ExpressJS
                    </li>
                </div>
            </div>
            <div className="ftDiv">

                <small>COPYRIGHT REVERSE - DANTR 2023</small>
            </div>
        </div>
    )
}
export default Footer