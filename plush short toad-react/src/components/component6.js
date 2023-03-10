import React from 'react'

import PropTypes from 'prop-types'

import './component6.css'

const Component6 = (props) => {
  return (
    <div className="component6-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component6-image"
      />
    </div>
  )
}

Component6.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/landing%20page%20%5B1%5D%20%5B2%5D-200h.png',
}

Component6.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component6
