import myimage from "../images/image.jpg"
function Header() {
    return (
            <div className="header">
                <img src={myimage} alt=""/>
            </div>
    )
}

export default Header;