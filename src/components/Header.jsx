
function Header(){
    return (
      <nav>
        <div className="page-header">
          <img className="brand-logo" href="#" src="/brand_logo.png" alt="brand-logo" />
          <ul className="nav-bar">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button className="login-button">Login</button>
        </div>
      </nav>
    );
}

export default Header;