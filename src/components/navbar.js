import React from 'react';
import { scroller } from 'react-scroll';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = (props) => {
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <div className="navbar-headerbg">
        <div className="navbar-headerlogo">
          <span className="navbar-text">
            <span className="">AZUL SCHIAFFINO</span>
          </span>
        </div>
        <div className="navbar-rightmenulist">
          <div className="navbar-menulist1">
            <span className="navbar-text02">
              {/* Utiliza la función scrollTo al hacer clic en el enlace */}
              <a href="#100" onClick={() => scrollTo('inicio')}>
                Inicio
              </a>
            </span>
          </div>
          <div className="navbar-menulist2">
            <span className="navbar-text04">
              <a href="#3" onClick={() => scrollTo('carrera')}>
                Carrera
              </a>
            </span>
          </div>
          <div className="navbar-menulist6">
            <span className="navbar-text08">
              <a href="#4" onClick={() => scrollTo('contacto')}>
                Contacto
              </a>
            </span>
          </div>
          <div className="navbar-menulist4">
            <div className="navbar-downloadresumecta">
              <span className="navbar-text10">
                <a href="#2" onClick={() => scrollTo('metodologia')}>
                  Metodologia
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  rootClassName: '',
};

Navbar.propTypes = {
  rootClassName: PropTypes.string,
};

export default Navbar;
