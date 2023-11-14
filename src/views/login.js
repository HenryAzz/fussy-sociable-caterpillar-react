import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - Fussy Sociable Caterpillar</title>
        <meta
          property="og:title"
          content="login - Fussy Sociable Caterpillar"
        />
      </Helmet>
    </div>
  )
}

export default Login
