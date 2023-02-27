import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component3-image"
      />
    </div>
  )
}

Component3.defaultProps = {
  image_alt: 'image',
  image_src:
    '/playground_assets/image%20%5B9%5D%20%5B1%5D%20%5B1%5D%20%5B1%5D-200h.png',
}

Component3.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component3
