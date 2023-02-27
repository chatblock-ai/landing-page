import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component4-image"
      />
    </div>
  )
}

Component4.defaultProps = {
  image_src: '/playground_assets/discord%20icon%20%5B2%5D-200h.png',
  image_alt: 'image',
}

Component4.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component4
