import './NavBar.css'

function NavBar() {
    return(
        <div class="nav">
            <div className="nav-left">
                <a href="/">
                    spoJiFy
                </a>
            </div>
            <div className="nav-right">
                <a href="/favorites">
                    My Favorites
                </a>
            </div>
        </div>
    )
}

export default NavBar