import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      // data-bs-theme="dark"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={viteLogo} alt="Vite logo" height={25} />
          <span>TodoMuebles</span>
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsTM"
          aria-controls="navbarsTM"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsTM">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dormitorio">
                Domitorio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Jardin">
                Jardin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Living">
                Living
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Oficina">
                Oficina
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Sillas y sillones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mesas
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-primary">Acceder</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
