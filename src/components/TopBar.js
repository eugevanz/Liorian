import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../state'
import { useContext } from 'react';

function TopBar() {
  const {isShowing, showMenu} = useContext(AppContext);

  return (<section className="section">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="alt"></img>
        </a>
        
        <FontAwesomeIcon icon={faChevronCircleDown} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"></FontAwesomeIcon>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="#href" className="navbar-item">Home</a>
          <a href="#href" className="navbar-item">Documentation</a>
          <a href="#href" className="navbar-item" onClick={() => showMenu(!isShowing)}>Subjects</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="#href" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="#href" className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>);
}

export default TopBar;