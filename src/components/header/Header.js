import './header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* <div className="headerTitles"> */}
                {/* <span className='headerTitleSm'>blog </span> */}
                {/* <span className='headerTitleLg' >news</span> */}
            {/* </div> */}

            <img
                className='headerImg'
                src="https://blog-api-dantr.vercel.app/images/dantr_logo.png"
                alt=""
            />



        </div>
    )
}

export default Header