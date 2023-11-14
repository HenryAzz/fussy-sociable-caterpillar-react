import React from 'react'

import PropTypes from 'prop-types'

import './metodologia.css'

const Metodologia = (props) => {
  return (
    <div id="2" className={`metodologia-container ${props.rootClassName} `}>
      <div className="metodologia-container1">
        <span className="metodologia-metodologia">{props.metodologia}</span>
        <div className="metodologia-container2">
          <div className="metodologia-box-scrum">
            <div className="metodologia-box-scrum-svg">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="metodologia-image"
              />
            </div>
            <div className="metodologia-box-scrum-title">
              <span className="metodologia-text-scrum-title">
                {props.SCRUM}
              </span>
            </div>
            <div className="metodologia-box-scrum-p">
              <span className="metodologia-text-scrum-p">
                {props.SCRUMTEXT}
              </span>
            </div>
          </div>
          <div className="metodologia-box-git-hub">
            <div className="metodologia-box-git-hub-svg">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="metodologia-image1"
              />
            </div>
            <div className="metodologia-box-git-hub-title">
              <span className="metodologia-text-git-hub-title">
                {props.GITHUB}
              </span>
            </div>
            <div className="metodologia-box-git-hub-p">
              <span className="metodologia-text-git-hub-p">
                {props.GITHUBTEXT}
              </span>
            </div>
          </div>
          <div className="metodologia-box-modularizado">
            <div className="metodologia-box-modularizado-svg">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="metodologia-image2"
              />
            </div>
            <div className="metodologia-box-modularizado-title">
              <span className="metodologia-text-modularizado-title">
                {props.MODULARIZADO}
              </span>
            </div>
            <div className="metodologia-box-modularizado-p">
              <span className="metodologia-text-modularizado-p">
                {props.MODULARIZADOTEXT}
              </span>
            </div>
          </div>
          <div className="metodologia-box-tdd">
            <div className="metodologia-box-tdd-svg">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="metodologia-image3"
              />
            </div>
            <div className="metodologia-box-tdd-title">
              <span className="metodologia-text-tdd-title">{props.TDD}</span>
            </div>
            <div className="metodologia-box-tdd-p">
              <span className="metodologia-text-tdd-p">{props.TDDTEXT}</span>
            </div>
          </div>
        </div>
        <div className="metodologia-container3">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="metodologia-pasted-image"
          />
          <img
            alt={props.pastedImage_alt1}
            src={props.pastedImage_src1}
            className="metodologia-pasted-image01"
          />
          <img
            alt={props.pastedImage_alt2}
            src={props.pastedImage_src2}
            className="metodologia-pasted-image02"
          />
          <img
            alt={props.pastedImage_alt3}
            src={props.pastedImage_src3}
            className="metodologia-pasted-image03"
          />
          <img
            alt={props.pastedImage_alt4}
            src={props.pastedImage_src4}
            className="metodologia-pasted-image04"
          />
          <img
            alt={props.pastedImage_alt5}
            src={props.pastedImage_src5}
            className="metodologia-pasted-image05"
          />
          <img
            alt={props.pastedImage_alt6}
            src={props.pastedImage_src6}
            className="metodologia-pasted-image06"
          />
          <img
            alt={props.pastedImage_alt7}
            src={props.pastedImage_src7}
            className="metodologia-pasted-image07"
          />
          <img
            alt={props.pastedImage_alt8}
            src={props.pastedImage_src8}
            className="metodologia-pasted-image08"
          />
        </div>
        <div className="metodologia-container4">
          <img
            alt={props.pastedImage_alt9}
            src={props.pastedImage_src9}
            className="metodologia-pasted-image09"
          />
          <img
            alt={props.pastedImage_alt11}
            src={props.pastedImage_src11}
            className="metodologia-pasted-image10"
          />
          <img
            alt={props.pastedImage_alt21}
            src={props.pastedImage_src21}
            className="metodologia-pasted-image11"
          />
          <img
            alt={props.pastedImage_alt31}
            src={props.pastedImage_src31}
            className="metodologia-pasted-image12"
          />
          <img
            alt={props.pastedImage_alt41}
            src={props.pastedImage_src41}
            className="metodologia-pasted-image13"
          />
          <img
            alt={props.pastedImage_alt51}
            src={props.pastedImage_src51}
            className="metodologia-pasted-image14"
          />
          <img
            alt={props.pastedImage_alt61}
            src={props.pastedImage_src61}
            className="metodologia-pasted-image15"
          />
          <img
            alt={props.pastedImage_alt71}
            src={props.pastedImage_src71}
            className="metodologia-pasted-image16"
          />
          <img
            alt={props.pastedImage_alt81}
            src={props.pastedImage_src81}
            className="metodologia-pasted-image17"
          />
        </div>
      </div>
    </div>
  )
}

Metodologia.defaultProps = {
  TDD: 'TDD',
  pastedImage_src51: '/external/pastedimage-xu6ql-200h.png',
  pastedImage_alt1: 'pastedImage',
  image_src1: '/dise%C3%A3%C2%B1o%20sin%20t%C3%A3%C2%ADtulo%20(30)-200h.png',
  pastedImage_alt41: 'pastedImage',
  pastedImage_alt9: 'pastedImage',
  pastedImage_src81: '/external/pastedimage-7nza-200h.png',
  pastedImage_src31: '/external/pastedimage-fn36-200h.png',
  pastedImage_src8: '/external/pastedimage-7nza-200h.png',
  pastedImage_alt61: 'pastedImage',
  rootClassName: '',
  image_alt3: 'image',
  pastedImage_alt71: 'pastedImage',
  pastedImage_src11: '/external/pastedimage-32up-200h.png',
  pastedImage_src4: '/external/pastedimage-moqs-200h.png',
  pastedImage_src71: '/external/pastedimage-lroc-200h.png',
  pastedImage_alt: 'pastedImage',
  pastedImage_alt81: 'pastedImage',
  pastedImage_src2: '/external/pastedimage-vzf8-200h.png',
  pastedImage_src1: '/external/pastedimage-32up-200h.png',
  pastedImage_src6: '/external/pastedimage-yd6g-200h.png',
  image_alt1: 'image',
  pastedImage_alt2: 'pastedImage',
  MODULARIZADOTEXT:
    'En cada proyecto priorice las buenas practicas y la organización lógica de todos los  componentes. Un ejemplo es el repositorio que lideré en el proyecto propTech.',
  image_alt: 'image',
  pastedImage_alt51: 'pastedImage',
  pastedImage_alt3: 'pastedImage',
  pastedImage_src7: '/external/pastedimage-lroc-200h.png',
  pastedImage_src3: '/external/pastedimage-fn36-200h.png',
  pastedImage_alt11: 'pastedImage',
  metodologia: 'METODOLOGÍA DE TRABAJO',
  pastedImage_alt6: 'pastedImage',
  pastedImage_src41: '/external/pastedimage-moqs-200h.png',
  pastedImage_alt31: 'pastedImage',
  GITHUB: 'GITHUB',
  image_alt2: 'image',
  MODULARIZADO: 'MODULARIZADO',
  pastedImage_src: '/external/pastedimage-dnlc-200h.png',
  SCRUM: 'SCRUM',
  pastedImage_alt21: 'pastedImage',
  pastedImage_alt7: 'pastedImage',
  image_src3: '/dise%C3%A3%C2%B1o%20sin%20t%C3%A3%C2%ADtulo%20(32)-200h.png',
  TDDTEXT:
    'No es solo una metodología, sino un hábito de trabajo que valoro. Implemento diversas estrategias de prueba para garantizar la calidad y funcionalidad de mi código.',
  pastedImage_alt8: 'pastedImage',
  SCRUMTEXT:
    'Utilizo herramientas fundamentales de comunicacion en un equipo y soluciono dudas al respecto de su implementacion. Plataformas como Slack, Discord, Trello y GitHub, etc.',
  pastedImage_alt5: 'pastedImage',
  image_src2: '/dise%C3%A3%C2%B1o%20sin%20t%C3%A3%C2%ADtulo%20(31)-200h.png',
  GITHUBTEXT:
    'En el proyecto propTech fui encargada de los Pull Request en un equipo con 6 compañeros.  Los Pull contenian codigo del Front y del Back con React, Typescript, SQL, etc.',
  pastedImage_src21: '/external/pastedimage-vzf8-200h.png',
  image_src: '/dise%C3%A3%C2%B1o%20sin%20t%C3%A3%C2%ADtulo%20(29)-200h.png',
  pastedImage_src9: '/external/pastedimage-dnlc-200h.png',
  pastedImage_src61: '/external/pastedimage-yd6g-200h.png',
  pastedImage_src5: '/external/pastedimage-xu6ql-200h.png',
  pastedImage_alt4: 'pastedImage',
}

Metodologia.propTypes = {
  TDD: PropTypes.string,
  pastedImage_src51: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  pastedImage_alt41: PropTypes.string,
  pastedImage_alt9: PropTypes.string,
  pastedImage_src81: PropTypes.string,
  pastedImage_src31: PropTypes.string,
  pastedImage_src8: PropTypes.string,
  pastedImage_alt61: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt3: PropTypes.string,
  pastedImage_alt71: PropTypes.string,
  pastedImage_src11: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  pastedImage_src71: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_alt81: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_src6: PropTypes.string,
  image_alt1: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  MODULARIZADOTEXT: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_alt51: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_src7: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_alt11: PropTypes.string,
  metodologia: PropTypes.string,
  pastedImage_alt6: PropTypes.string,
  pastedImage_src41: PropTypes.string,
  pastedImage_alt31: PropTypes.string,
  GITHUB: PropTypes.string,
  image_alt2: PropTypes.string,
  MODULARIZADO: PropTypes.string,
  pastedImage_src: PropTypes.string,
  SCRUM: PropTypes.string,
  pastedImage_alt21: PropTypes.string,
  pastedImage_alt7: PropTypes.string,
  image_src3: PropTypes.string,
  TDDTEXT: PropTypes.string,
  pastedImage_alt8: PropTypes.string,
  SCRUMTEXT: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
  image_src2: PropTypes.string,
  GITHUBTEXT: PropTypes.string,
  pastedImage_src21: PropTypes.string,
  image_src: PropTypes.string,
  pastedImage_src9: PropTypes.string,
  pastedImage_src61: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
}

export default Metodologia
