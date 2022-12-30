import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerLeft">
                <h1 className='footerLogo'>Tr</h1>
                <div className="footerSocial">
                    <i className="footerIcon fa-brands fa-square-facebook"></i>
                    <i className="footerIcon fa-brands fa-square-twitter"></i>
                    <i className="footerIcon fa-brands fa-square-instagram"></i>
                    <i className="footerIcon fa-brands fa-square-facebook"></i>
                </div>

            </div>
            <div className="footerCenter">
                <div className="footerCenterItem">
                    <span className="footerCenterItemTitle">
                        GROUP
                    </span>
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>

                    </ul>
                </div>
                <div className="footerCenterItem">
                    <span className="footerCenterItemTitle">
                        CONTACT
                    </span>
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>

                </div>
                <div className="footerCenterItem">
                    <span className="footerCenterItemTitle">
                        ABOUT
                    </span>
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>

                </div>
            </div>
            <div className="footerRight">
                <span className="footerCenterItemTitle">
                    CHANEL
                </span>
            </div>
        </div>
    )
}

export default Footer