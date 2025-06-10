

function Header(){
    return(
        <>
        <div className="head  w-100 mb-3 sticky-top" id="head">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid d-flex">
    
    <a class="navbar-brand ms-3 border border-dark rounded border-3" href="#head" style={{borderWidth:"10px"}}>
      <img src="./Assets/HpLogo.avif" alt="HP" width="55" height="50"/>
    </a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav" >
      <ul className="navbar-nav ">
        <li className="nav-item m-3">
          <a className="nav-link "  href="#about">About Us</a>
        </li>
        <li className="nav-item m-3">
          <a className="nav-link" href="#skill">Skills</a>
        </li>
        <li className="nav-item m-3">
          <a className="nav-link " href="#project">Projects</a>
        </li>
        <li className="nav-item m-3">
          <a className="nav-link " href="#footer">Footer</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
        
        
        </div>

        </>
    )
}

export default Header;