import React from 'react'

import PropTypes from 'prop-types'

import './contacto-final.css'

const ContactoFinal = (props) => {
  return (
    <div id='4' className={`contacto-final-container ${props.rootClassName} `}>
      <div className="contacto-final-container1">
        <div className="contacto-final-container2">
          <textarea
            placeholder={props.presentacionTarjeta}
            className="contacto-final-presentacion-tarjeta textarea"
          ></textarea>
          <div className="contacto-final-container3">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="contacto-final-image"
            />
          </div>
        </div>
        <div className="contacto-final-container4">
          <span className="contacto-final-p-presentacion">
            {props.pPresentacion}
          </span>
        </div>
        <div className="contacto-final-container5">
          <div className="contacto-final-container6">
            <span className="contacto-final-p-mail-a">{props.pMailA}</span>
            <span className="contacto-final-p-mail-b">{props.pMailB}</span>
          </div>
          <div className="contacto-final-container7">
  <a href="https://www.instagram.com/zwra_read/" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt}
      src={props.pastedImage_src}
      className="contacto-final-pasted-image"
    />
  </a>
  <a href="https://www.linkedin.com/in/azsc/" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt1}
      src={props.pastedImage_src1}
      className="contacto-final-pasted-image1"
    />
  </a>
  <a href="https://www.facebook.com/azulcamila.schiaffino/" target="_blank" rel="noopener noreferrer">
              <img
                alt={props.pastedImage_alt2}
                src={props.pastedImage_src2}
                className="contacto-final-pasted-image2"
              />
            </a>
</div>
        </div>
      </div>
    </div>
  )
}

ContactoFinal.defaultProps = {
  presentacionTarjeta: 'Resuelvo problemas, Hablame!.',
  pastedImage_alt1: 'pastedImage',
  pastedImage_alt: 'pastedImage',
  pMailA: 'Mi mail es',
  pastedImage_src2: '/external/pastedimage-owy-600w.png',
  image_alt: 'image',
  pMailB: 'azschiaffino@gmail.com',
  image_src: '/paleta%20de%20colores%20(22)-200h.png',
  pastedImage_alt2: 'pastedImage',
  pPresentacion:
    'Soy fan de los rompecabezas y el codigo en la programacion. Estoy comenzando en este mundo y no voy a parar. Si me preguntan, de aqui a diez años me veo trabajando por gusto y con proyectos a gran escala en el mundo digital.',
  rootClassName: '',
  pastedImage_src1: '/external/pastedimage-mi1-200h.png',
  pastedImage_src: '/external/pastedimage-qvvr-200h.png',
  text: 'Text',
}

ContactoFinal.propTypes = {
  presentacionTarjeta: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pMailA: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  image_alt: PropTypes.string,
  pMailB: PropTypes.string,
  image_src: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pPresentacion: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text: PropTypes.string,
}

export default ContactoFinal
