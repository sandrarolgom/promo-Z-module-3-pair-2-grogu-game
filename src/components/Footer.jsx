import  {NavLink} from 'react-router-dom'

function Footer() {
  return (
<footer className="footer">
  <nav>
    <ul>
      <li className="footer__menu-item">
        <NavLink to="/play" 
            className={({ isActive }) => isActive ? 'footer__menu-link active' : 'footer__menu-link'} 
            href="#/">
            A jugar
        </NavLink>
      </li>
      <li className="footer__menu-item">
        <NavLink to="/rules"
            className={({ isActive }) => isActive ? 'footer__menu-link active' : 'footer__menu-link'}
            href="#/instructions">
            ¿Cómo se juega?
        </NavLink>
      </li>
      <li className="footer__menu-item">
        <NavLink to="/options" 
            className={({ isActive }) => isActive ? 'footer__menu-link active' : 'footer__menu-link'} 
            href="#/options">
            Más opciones
        </NavLink>
      </li>
    </ul>
  </nav>
  <small className="footer__copy">© Adalab</small>
</footer>
)
}

export default Footer