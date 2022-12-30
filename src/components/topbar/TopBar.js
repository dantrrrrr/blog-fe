import './topBar.css'

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="topLeft">
                <label htmlFor="searchInput">

                    <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
                </label>
                <input type="text" className='searchInput' id='searchInput' placeholder='Type for search .....' />
            </div>
            <div className="topRight">
                <button>Login</button>
                <button>Register</button>
                <div className="topLanguage">
                    <span>VN</span>
                    <span>EN</span>
                </div>
            </div>

        </div>
    )
}

export default TopBar