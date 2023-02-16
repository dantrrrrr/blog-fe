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
                    <button className="btn">
                        SEND
                        <FiSend className="icon" />
                    </button>
                </div>
            </div>
            <div className="ftLinks">
                <div className="linkGroup">
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                </div>
                <div className="linkGroup">
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                </div>
                <div className="linkGroup">
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
                    </li>
                    <li className="ftListItem">
                        <FiChevronRight /> link item 1
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