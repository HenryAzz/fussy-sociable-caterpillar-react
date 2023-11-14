import React from 'react'

import PropTypes from 'prop-types'

import './lil-home.css'

const LilHome = (props) => {
  return (
    <div id='1' className={`lil-home-container ${props.rootClassName} `}>
      <div className="lil-home-frame1000004993">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="lil-home-image"
        />
        <div className="lil-home-container01">
          <div className="lil-home-container02">
            <span className="lil-home-back">
              <span className="">BACK END</span>
              <br className=""></br>
            </span>
          </div>
          <div className="lil-home-container03">
            <div className="lil-home-container04">
              <span className="lil-home-full">
                <span className="">FULL</span>
                <span className=""> STACK</span>
              </span>
            </div>
            <div className="lil-home-nameanimation">
              <img
                alt={props.pastedImage_alt12}
                src={props.pastedImage_src12}
                className="lil-home-pasted-image"
              />
            </div>
          </div>
        </div>
        <span className="lil-home-text04">
          <span className="lil-home-text05">Diseñando</span>
          <span className="lil-home-text06">
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
          <span className="lil-home-text09">estructuras</span>
          <span className="lil-home-text10">
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
          <span className="lil-home-text13">
            <span className="">complejas.</span>
            <br className=""></br>
            <span className=""></span>
          </span>
          <span className="lil-home-text17">
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
          <span className="lil-home-text20">full stack</span>
          <span className="lil-home-text21">
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
          <span className="lil-home-text24">background</span>
          <span className="lil-home-text25">
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
        <div className="lil-home-container05">
          <div className="lil-home-container06">
            <div className="lil-home-container07">
            <div className="lil-home-connectcta">
                <a href="https://wa.me/+5401127702512?text=Hola,%20soy%20Az!" target="_blank" rel="noopener noreferrer">
                  <span className="lil-home-text29">CONTACTO</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lil-home-container08">
            <div className="lil-home-container09">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/azsc/" target="_blank" rel="noopener noreferrer">
                <img alt={props.pastedImage_alt6} src={props.pastedImage_src6} className="lil-home-pasted-image1" />
              </a>
            </div>
            <div className="lil-home-container10">
              {/* GitHub */}
              <a href="https://github.com/HenryAzz" target="_blank" rel="noopener noreferrer">
                <img alt={props.pastedImage_alt4} src={props.pastedImage_src4} className="lil-home-pasted-image2" />
              </a>
            </div>
            <div className="lil-home-container11">
              {/* Instagram */}
              <a href="https://www.instagram.com/zwra_read/" target="_blank" rel="noopener noreferrer">
                <img alt={props.pastedImage_alt5} src={props.pastedImage_src5} className="lil-home-pasted-image3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LilHome.defaultProps = {
  image_src: '/puntob-1500w.png',
  pastedImage_alt3: 'pastedImage',
  pastedImage_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/95d4b78c-8a36-4c3c-9a6b-83e1f1c4aa1c?org_if_sml=1843',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/8487139e-a90d-47e9-bd27-f2e35c8d00eb?org_if_sml=1459855',
  pastedImage_alt21: 'pastedImage',
  pastedImage_alt9: 'pastedImage',
  pastedImage_alt: 'pastedImage',
  pastedImage_alt7: 'pastedImage',
  pastedImage_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/8487139e-a90d-47e9-bd27-f2e35c8d00eb?org_if_sml=1459855',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src21:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/ca50b088-5232-440e-b0bb-621b4ccd1912?org_if_sml=1445',
  rootClassName: '',
  pastedImage_alt10: 'pastedImage',
  pastedImage_alt11: 'pastedImage',
  pastedImage_src5: '/external/pastedimage-jfw9.svg',
  pastedImage_alt8: 'pastedImage',
  pastedImage_src10: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  pastedImage_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  pastedImage_alt4: 'pastedImage',
  pastedImage_src8: 'https://play.teleporthq.io/static/svg/default-img.svg',
  pastedImage_src7: 'https://play.teleporthq.io/static/svg/default-img.svg',
  pastedImage_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/ca50b088-5232-440e-b0bb-621b4ccd1912?org_if_sml=1445',
  pastedImage_alt5: 'pastedImage',
  pastedImage_alt2: 'pastedImage',
  pastedImage_src4: '/external/pastedimage-kf9-200h.png',
  pastedImage_src9: 'https://play.teleporthq.io/static/svg/default-img.svg',
  pastedImage_src12: '/external/pastedimage-1to2u-800w.png',
  pastedImage_alt6: 'pastedImage',
  pastedImage_alt12: 'pastedImage',
  pastedImage_src31:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/95d4b78c-8a36-4c3c-9a6b-83e1f1c4aa1c?org_if_sml=1843',
  pastedImage_src6: '/external/pastedimage-p75l.svg',
}

LilHome.propTypes = {
  image_src: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt21: PropTypes.string,
  pastedImage_alt9: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_alt7: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src21: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_alt10: PropTypes.string,
  pastedImage_alt11: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  pastedImage_alt8: PropTypes.string,
  pastedImage_src10: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src11: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
  pastedImage_src8: PropTypes.string,
  pastedImage_src7: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  pastedImage_src9: PropTypes.string,
  pastedImage_src12: PropTypes.string,
  pastedImage_alt6: PropTypes.string,
  pastedImage_alt12: PropTypes.string,
  pastedImage_src31: PropTypes.string,
  pastedImage_src6: PropTypes.string,
}

export default LilHome
