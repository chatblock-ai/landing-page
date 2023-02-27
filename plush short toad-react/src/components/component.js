import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: '/playground_assets/landing%20page%20%5B1%5D%20%5B1%5D-200h.png',
  image_alt: 'image',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
