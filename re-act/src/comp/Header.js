import Navigation from './Navigation'

function Header() {
    return (
        <div>
            <h1 className="app-header flex">
                <span className="logo">re-Act</span>
                <Navigation></Navigation>
            </h1>
            
        </div>
    )
}

export default Header;