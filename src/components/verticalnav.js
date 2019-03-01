import React from 'react'


import './verticalnav.css'

const VerticalNav = ({children}) => (
  <nav className='main-navigation'>
    <ul style={{listStyle: 'none', textTransform: 'uppercase', textDecoration: 'none'}}>
      {React.Children.map(children, (object, i) => {
        return (
          <li key={i} style={{margin: 0}}>
            {object}
          </li>
        )
      })}
    </ul>
  </nav>
)

export default VerticalNav
