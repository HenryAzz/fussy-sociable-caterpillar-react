import React from 'react'

import PropTypes from 'prop-types'

import './contacto-final2.css'

const ContactoFinal2 = (props) => {
  return (
    <div id='4' className={`contacto-final2-container ${props.rootClassName} `}>
      <div className="contacto-final2-box-conteiner">
        <div className="contacto-final2-box-title">
          <div className="contacto-final2-box-title1">
            <span className="contacto-final2-text-title">
              {props.textTitle2}
            </span>
            <span className="contacto-final2-text-title1">
              {props.textTitle11}
            </span>
          </div>
          <img
            alt={props.image_alt21}
            src={props.image_src21}
            className="contacto-final2-image-contact"
          />
        </div>
        <div className="contacto-final2-box-p">
          <span className="contacto-final2-p-presentacion">
            {props.pPresentacion}
          </span>
          <span className="contacto-final2-p-presentacion1">
            {props.pPresentacion1}
          </span>
          <span className="contacto-final2-p-presentacion2">
            {props.pPresentacion11}
          </span>
        </div>
        <div className="contacto-final2-box-contact">
  <div className="contacto-final2-box-left">
    <span className="contacto-final2-p-mail-b">{props.pMailB}</span>
  </div>
  <div className="contacto-final2-box-rigth">
    <a href="https://www.instagram.com/zwra_read/" target="_blank" rel="noopener noreferrer">
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="contacto-final2-instagram-image"
      />
    </a>
    <a href="https://www.linkedin.com/in/azsc/" target="_blank" rel="noopener noreferrer">
      <img
        alt={props.pastedImage_alt1}
        src={props.pastedImage_src1}
        className="contacto-final2-linked-in-image"
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

ContactoFinal2.defaultProps = {
  textTitle2: 'Resuelvo problemas,',
  image_alt: 'Resuelvo problemas,',
  image_src: 'f0e3d4d5-e899-4fb5-94bd-da1704b415e7',
  pMailA: 'Mi mail e',
  textTitle: 'Resuelvo problemas,',
  image_alt2: 'image',
  pPresentacion1: 'Estoy comenzando en este mundo y no voy a parar.',
  image_alt1: 'image',
  text: 'Text',
  pMailB: 'azschiaffino@gmail.com',
  rootClassName: '',
  image_src1: 'c6659734-8810-41ca-ba05-0b3cf4335eac',
  pastedImage_src: '/external/pastedimage-qvvr-200h-200h.png',
  pPresentacion11:
    'Si me preguntan, de aqui a diez años me veo trabajando por gusto y con proyectos a gran escala en el mundo digital.',
  pastedImage_src2: '/external/pastedimage-owy-600w-1200w.png',
  image_src2: '6faa4016-84ec-44f1-8842-38d4441950a2',
  pastedImage_alt1: 'pastedImage',
  presentacionTarjeta: 'Resuelvo problemas, Hablame!.',
  pPresentacion: 'Soy fan de los rompecabezas y el codigo en la programacion.',
  image_alt21: 'image',
  textTitle11: 'Hablame!',
  textTitle1: 'Hablame!',
  image_src21: '/external/paleta%20de%20colores%20(25)-300w.png',
  pastedImage_alt: 'pastedImage',
  pastedImage_src1: '/external/pastedimage-mi1-200h-200h.png',
  pastedImage_alt2: 'pastedImage',
}

ContactoFinal2.propTypes = {
  textTitle2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  pMailA: PropTypes.string,
  textTitle: PropTypes.string,
  image_alt2: PropTypes.string,
  pPresentacion1: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  pMailB: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pPresentacion11: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  image_src2: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  presentacionTarjeta: PropTypes.string,
  pPresentacion: PropTypes.string,
  image_alt21: PropTypes.string,
  textTitle11: PropTypes.string,
  textTitle1: PropTypes.string,
  image_src21: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
}

export default ContactoFinal2
