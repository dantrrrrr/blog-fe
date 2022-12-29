import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React Project</span>
                <span className='headerTitleLg' >Blog</span>
            </div>
            <img
                className='headerImg'
                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/313251536_694843022003571_7766482947946918353_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=VxdbpEdIGTIAX-yLc1k&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAERddTOMFU0SJqNK89XRZgoDoxStkbpunzUFsVCCnXuA&oe=63AFA521"
                alt="" 
            />

        </div>
    )
}

export default Header