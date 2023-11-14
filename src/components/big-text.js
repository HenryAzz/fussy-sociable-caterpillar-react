import React from 'react'

import PropTypes from 'prop-types'

import './big-text.css'

const BigText = (props) => {
  return (
    <div className={`big-text-container ${props.rootClassName} `}>
      <span className="big-text-text">{props.BigText}</span>
    </div>
  )
}

BigText.defaultProps = {
  rootClassName: '',
  BigText: 'PRUÉBAME!',
}

BigText.propTypes = {
  rootClassName: PropTypes.string,
  BigText: PropTypes.string,
}

export default BigText
