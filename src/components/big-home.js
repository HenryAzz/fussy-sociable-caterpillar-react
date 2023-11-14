import React from 'react'

import PropTypes from 'prop-types'

import './big-home.css'

const BigHome = (props) => {
  return (
    <div id="1" className="big-home-container" >
      <div className="big-home-bak-end-big">
        <div className="big-home-box-back-end">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="big-home-backgroundnnnnnn"
          />
          <div className="big-home-box-back-end-left">
            <div className="big-home-box-title">
              <img
                alt={props.image_alt21}
                src={props.image_src21}
                className="big-home-image"
              />
            </div>
            <div className="big-home-box-contact">
            <div className="big-home-contact">
  <a href="https://wa.me/+5401127702512?text=Hola,%20soy%20Az!" target="_blank" rel="noopener noreferrer">
    <span className="big-home-text-contact">CONTACTO</span>
  </a>
</div>

            </div>
          </div>
          <div className="big-home-box-back-end-rigth">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="big-home-image1"
            />
            <div className="big-home-container1">
              <div className="big-home-container2">
                <span className="big-home-text">
                  <span className="big-home-text01">Diseñando</span>
                  <span className="big-home-text02">
                    <span>
                      {' '}
                      soluciones, creando
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="big-home-text05">estructuras</span>
                  <span className="big-home-text06">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="big-home-text09">
                    <span>complejas.</span>
                    <br></br>
                    <span></span>
                  </span>
                  <span className="big-home-text13">
                    <span>
                      Developer
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="big-home-text16">full stack</span>
                  <span className="big-home-text17">
                    <span>
                      {' '}
                      con
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="big-home-text20">background</span>
                  <span className="big-home-text21">
                    <span>
                      {' '}
                      en
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>Diseño UX UI</span>
                </span>
              </div>
              <div className="big-home-container3">
              <div className="big-home-container4">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/azsc/" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt}
      src={props.pastedImage_src}
      className="big-home-pasted-image"
    />
  </a>
  
  {/* GitHub */}
  <a href="https://github.com/HenryAzz" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt1}
      src={props.pastedImage_src1}
      className="big-home-pasted-image1"
    />
  </a>
  
  {/* Instagram */}
  <a href="https://www.instagram.com/zwra_read/" target="_blank" rel="noopener noreferrer">
    <img
      alt={props.pastedImage_alt2}
      src={props.pastedImage_src2}
      className="big-home-pasted-image2"
    />
  </a>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BigHome.defaultProps = {
  pastedImage_alt12: 'pastedImage',
  pastedImage_src12:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/8487139e-a90d-47e9-bd27-f2e35c8d00eb?org_if_sml=1459855',
  image_src2: '7d79a701-474f-4688-98b0-39086231ebdb',
  pastedImage_src5: '/external/pastedimage-jfw9.svg',
  image_alt1: 'image',
  image_src: '/puntob-1500w.png',
  pastedImage_alt4: 'pastedImage',
  pastedImage_alt6: 'pastedImage',
  pastedImage_src6:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/19374b32-ebb7-42d8-aecc-9df547eb1aa1?org_if_sml=11687',
  image_alt2: 'image',
  pastedImage_src61: '/external/pastedimage-p75l.svg',
  image_alt21: 'image',
  image_src1: '/paleta%20de%20colores%20(portada%20de%20facebook)-500w.png',
  image_src21:
    '/paleta%20de%20colores%20(portada%20de%20facebook)%20(3)-800w.png',
  rootClassName: '',
  pastedImage_src4: '/external/pastedimage-kf9-200h.png',
  image_alt: 'image',
  pastedImage_alt61: 'pastedImage',
  pastedImage_alt5: 'pastedImage',
}

BigHome.propTypes = {
  pastedImage_alt12: PropTypes.string,
  pastedImage_src12: PropTypes.string,
  image_src2: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
  pastedImage_alt6: PropTypes.string,
  pastedImage_src6: PropTypes.string,
  image_alt2: PropTypes.string,
  pastedImage_src61: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src1: PropTypes.string,
  image_src21: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_alt61: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
}

export default BigHome
