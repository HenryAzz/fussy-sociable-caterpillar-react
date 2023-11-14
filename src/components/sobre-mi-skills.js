import React from 'react'

import PropTypes from 'prop-types'

import './sobre-mi-skills.css'

const SobreMiSkills = (props) => {
  return (
    <div id='3' className={`sobre-mi-skills-container ${props.rootClassName} `}>
      <div className="sobre-mi-skills-container1">
        <div className="sobre-mi-skills-container2">
          <span className="sobre-mi-skills-sobre-mi">{props.sobreMi}</span>
          <div className="sobre-mi-skills-container3">
            <span className="sobre-mi-skills-text">{props.sobreMiText}</span>
          </div>
        </div>
        <div className="sobre-mi-skills-container4">
          <span className="sobre-mi-skills-skills">{props.skills}</span>
          <div className="sobre-mi-skills-sv-gimage">
            <img
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="sobre-mi-skills-pasted-image"
            />
            <img
              alt={props.pastedImage_alt1}
              src={props.pastedImage_src1}
              className="sobre-mi-skills-pasted-image01"
            />
            <img
              alt={props.pastedImage_alt2}
              src={props.pastedImage_src2}
              className="sobre-mi-skills-pasted-image02"
            />
            <img
              alt={props.pastedImage_alt3}
              src={props.pastedImage_src3}
              className="sobre-mi-skills-pasted-image03"
            />
            <img
              alt={props.pastedImage_alt4}
              src={props.pastedImage_src4}
              className="sobre-mi-skills-pasted-image04"
            />
            <img
              alt={props.pastedImage_alt5}
              src={props.pastedImage_src5}
              className="sobre-mi-skills-pasted-image05"
            />
            <img
              alt={props.pastedImage_alt6}
              src={props.pastedImage_src6}
              className="sobre-mi-skills-pasted-image06"
            />
            <img
              alt={props.pastedImage_alt7}
              src={props.pastedImage_src7}
              className="sobre-mi-skills-pasted-image07"
            />
            <img
              alt={props.pastedImage_alt8}
              src={props.pastedImage_src8}
              className="sobre-mi-skills-pasted-image08"
            />
            <img
              alt={props.pastedImage_alt9}
              src={props.pastedImage_src9}
              className="sobre-mi-skills-pasted-image09"
            />
            <img
              alt={props.pastedImage_alt10}
              src={props.pastedImage_src10}
              className="sobre-mi-skills-pasted-image10"
            />
            <img
              alt={props.pastedImage_alt11}
              src={props.pastedImage_src11}
              className="sobre-mi-skills-pasted-image11"
            />
            <img
              alt={props.pastedImage_alt12}
              src={props.pastedImage_src12}
              className="sobre-mi-skills-pasted-image12"
            />
            <img
              alt={props.pastedImage_alt13}
              src={props.pastedImage_src13}
              className="sobre-mi-skills-pasted-image13"
            />
            <img
              alt={props.pastedImage_alt14}
              src={props.pastedImage_src14}
              className="sobre-mi-skills-pasted-image14"
            />
            <img
              alt={props.pastedImage_alt15}
              src={props.pastedImage_src15}
              className="sobre-mi-skills-pasted-image15"
            />
            <img
              alt={props.pastedImage_alt16}
              src={props.pastedImage_src16}
              className="sobre-mi-skills-pasted-image16"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

SobreMiSkills.defaultProps = {
  pastedImage_alt15: 'pastedImage',
  pastedImage_alt2: 'pastedImage',
  pastedImage_src14: '/external/pastedimage-2vo5.svg',
  pastedImage_alt16: 'pastedImage',
  pastedImage_alt1: 'pastedImage',
  pastedImage_alt7: 'pastedImage',
  pastedImage_src12: '/external/pastedimage-44f6.svg',
  pastedImage_src16: '/external/pastedimage-ysb.svg',
  pastedImage_src9: '/external/pastedimage-usu.svg',
  sobreMiText:
    'Graduada del Bootcam con mayor reconocimiento, soy Henry. Con un promedio de 9.8 de cuatro módulos totales. Destacando en mis proyectos finales en el Back End por el consumo de APIs,  CRUDs con Rutas protegidas, Tablas y Base de Datos. Siempre mejorando las buenas prácticas en el código y manteniendo una actitud profesional en el equipo.',
  pastedImage_alt5: 'pastedImage',
  pastedImage_alt6: 'pastedImage',
  pastedImage_alt14: 'pastedImage',
  pastedImage_alt10: 'pastedImage',
  pastedImage_src6: '/external/pastedimage-653b.svg',
  skills: 'SKILLS',
  pastedImage_alt8: 'pastedImage',
  pastedImage_src: '/external/pastedimage-udpp.svg',
  pastedImage_src4: '/external/pastedimage-4m3a.svg',
  rootClassName: '',
  pastedImage_alt11: 'pastedImage',
  sobreMi: 'SOBRE MI',
  pastedImage_alt9: 'pastedImage',
  pastedImage_src1: '/external/pastedimage-kz8o.svg',
  pastedImage_alt13: 'pastedImage',
  pastedImage_src8: '/external/pastedimage-kkou.svg',
  pastedImage_src11: '/external/pastedimage-ujt.svg',
  pastedImage_alt3: 'pastedImage',
  pastedImage_src13: '/external/pastedimage-7dmd.svg',
  pastedImage_src2: '/external/pastedimage-g5pn.svg',
  pastedImage_alt12: 'pastedImage',
  pastedImage_src7: '/external/pastedimage-17yi.svg',
  pastedImage_alt4: 'pastedImage',
  pastedImage_src15: '/external/pastedimage-fq2w.svg',
  pastedImage_src3: '/external/pastedimage-q8ya.svg',
  pastedImage_src5: '/external/pastedimage-th0c.svg',
  pastedImage_alt: 'pastedImage',
  pastedImage_src10: '/external/pastedimage-6e9.svg',
}

SobreMiSkills.propTypes = {
  pastedImage_alt15: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_src14: PropTypes.string,
  pastedImage_alt16: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_alt7: PropTypes.string,
  pastedImage_src12: PropTypes.string,
  pastedImage_src16: PropTypes.string,
  pastedImage_src9: PropTypes.string,
  sobreMiText: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
  pastedImage_alt6: PropTypes.string,
  pastedImage_alt14: PropTypes.string,
  pastedImage_alt10: PropTypes.string,
  pastedImage_src6: PropTypes.string,
  skills: PropTypes.string,
  pastedImage_alt8: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_alt11: PropTypes.string,
  sobreMi: PropTypes.string,
  pastedImage_alt9: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt13: PropTypes.string,
  pastedImage_src8: PropTypes.string,
  pastedImage_src11: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_src13: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_alt12: PropTypes.string,
  pastedImage_src7: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
  pastedImage_src15: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src10: PropTypes.string,
}

export default SobreMiSkills
