import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component1-image"
      />
    </div>
  )
}

Component1.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/image%20%5B12%5D%20%5B1%5D%20%5B2%5D-200h.png',
}

Component1.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component1
