import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <div className="app-component-container1">
        <div className="app-component-container2">
          <span className="app-component-create">{props.CREATE11}</span>
          <span className="app-component-create1">{props.CREATE2}</span>
        </div>
        <div className="app-component-container3">
          <span className="app-component-create2">{props.READ1}</span>
          <span className="app-component-ead">{props.READ2}</span>
        </div>
        <div className="app-component-container4">
          <span className="app-component-create3">{props.UPDATE1}</span>
          <span className="app-component-ead1">{props.UPDATE2}</span>
        </div>
        <div className="app-component-container5">
          <span className="app-component-create4">{props.DELETE11}</span>
          <span className="app-component-ead2">{props.DELETE2}</span>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  CREATE2: 'REATE',
  DELETE2: 'ELETE',
  READ2: 'EAD',
  UPDATE2: 'PDATE',
  pastedImage_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/bc94bbcc-de9b-4755-9c92-382f9452fba9?org_if_sml=15656',
  DELETE1: 'pastedImage',
  CREATE1: 'REATE',
  createC: 'C',
  UPDATE1: 'U',
  CREATE11: 'C',
  READ1: 'R',
  pastedImage_alt1: 'pastedImage',
  video_src: '',
  DELETE11: 'D',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fd6db521-7979-490b-90de-5bad8864e3c0/bc94bbcc-de9b-4755-9c92-382f9452fba9?org_if_sml=15656',
  rootClassName: '',
}

AppComponent.propTypes = {
  CREATE2: PropTypes.string,
  DELETE2: PropTypes.string,
  READ2: PropTypes.string,
  UPDATE2: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  DELETE1: PropTypes.string,
  CREATE1: PropTypes.string,
  createC: PropTypes.string,
  UPDATE1: PropTypes.string,
  CREATE11: PropTypes.string,
  READ1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  video_src: PropTypes.string,
  DELETE11: PropTypes.string,
  pastedImage_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
