import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
// import './amazeui.min.css'
import '../styles/index.css'
import '../styles/common.css'
import '../styles/nav.css'
import '../styles/header.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Bookman</title>
        <meta name="renderer" content="webkit" />
        {/* No Baidu Siteapp */}
        <meta http-equiv="Cache-Control" content="no-siteapp"/>
        <meta name="apple-mobile-web-app-title" content="Bookman"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" type="image/png" href="https://www.netlify.com/img/global/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://www.netlify.com/img/global/favicon/favicon-16x16.png" sizes="16x16" />
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
