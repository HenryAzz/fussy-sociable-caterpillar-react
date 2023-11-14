import React from 'react'

import PropTypes from 'prop-types'

import './medium-home.css'

const MediumHome = (props) => {
  return (
    <div id={"100"} className={`medium-home-container ${props.rootClassName} `}>
      <div className="medium-home-container01">
        <div className="medium-home-frame1000004993">
          <div className="medium-home-container02">
            <div className="medium-home-container03">
              <div className="medium-home-container04">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="medium-home-image"
                />
              </div>
              <span className="medium-home-text">
                <span className="medium-home-text01">Diseñando</span>
                <span className="medium-home-text02">
                  <span className="">
                    {' '}
                    soluciones, creando
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="medium-home-text05">estructuras</span>
                <span className="medium-home-text06">
                  <span className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="medium-home-text09">
                  <span className="">complejas.</span>
                  <br className=""></br>
                  <span className=""></span>
                </span>
                <span className="medium-home-text13">
                  <span className="">
                    Developer
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="medium-home-text16">full stack</span>
                <span className="medium-home-text17">
                  <span className="">
                    {' '}
                    con
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="medium-home-text20">background</span>
                <span className="medium-home-text21">
                  <span className="">
                    {' '}
                    en
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="">Diseño UX UI</span>
              </span>
            </div>
            <div className="medium-home-container05">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="medium-home-image1"
              />
            </div>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="medium-home-image2"
          />
          <div className="medium-home-container06">
          <div className="medium-home-container07" style={{ width: '100%' }}>
  <div className="medium-home-container08">
    <div className="medium-home-connectcta">
      <a href="https://wa.me/+5401127702512?text=Hola,%20soy%20Az!" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <span className="medium-home-text25">CONTACTO</span>
      </a>
    </div>
  </div>
</div>


            <div className="medium-home-container09">
            <div className="medium-home-container10">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/azsc/" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt6}
      src={props.pastedImage_src6}
      className="medium-home-pasted-image"
    />
  </a>
</div>
<div className="medium-home-container11">
  {/* GitHub */}
  <a href="https://github.com/HenryAzz" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt4}
      src={props.pastedImage_src4}
      className="medium-home-pasted-image1"
    />
  </a>
</div>
<div className="medium-home-container12">
  {/* Instagram */}
  <a href="https://www.instagram.com/zwra_read/" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt5}
      src={props.pastedImage_src5}
      className="medium-home-pasted-image2"
    />
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MediumHome.defaultProps = {
  image_alt1: 'image',
  pastedImage_alt5: 'pastedImage',
  image_alt: 'image',
  rootClassName: '',
  image_src1: '/paleta%20de%20colores%20(portada%20de%20facebook)1-700w.png',
  pastedImage_alt12: 'pastedImage',
  pastedImage_alt4: 'pastedImage',
  pastedImage_alt6: 'pastedImage',
  pastedImage_src4: '/external/pastedimage-kf9-200h.png',
  pastedImage_src5: '/external/pastedimage-jfw9.svg',
  image_src: '/puntob-1500w.png',
  pastedImage_src6: '/external/pastedimage-p75l.svg',
  image_src2:
    '/paleta%20de%20colores%20(portada%20de%20facebook)%20(3)1-1100w.png',
  pastedImage_src12:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/8487139e-a90d-47e9-bd27-f2e35c8d00eb?org_if_sml=1459855',
  image_alt2: 'image',
}

MediumHome.propTypes = {
  image_alt1: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  pastedImage_alt12: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
  pastedImage_alt6: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  image_src: PropTypes.string,
  pastedImage_src6: PropTypes.string,
  image_src2: PropTypes.string,
  pastedImage_src12: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default MediumHome
