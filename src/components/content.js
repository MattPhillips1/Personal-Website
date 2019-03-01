import React from 'react'

import './content.css'

const Content = ({children, outerStyle, innerStyle}) => (
  <div className='main-content' style={outerStyle}>
    <div className='content' style={innerStyle}>
      {children}
    </div>
  </div>
)

Content.defaultProps = {
  outerStyle: {},
  innerStyle: {}
}

export default Content
