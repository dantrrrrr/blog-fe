import './footer.css'

function Footer() {
    const today = new Date();
    return (
        <div className='footer'><span>Copyright &copy; {today.getFullYear()}</span></div>
    )
}
export default Footer