import React from 'react'
import { Link } from 'gatsby'

import VerticalNav from './verticalnav'
import Hider from './hider'
import NavLink from './navlink'
import FaceImage from './faceimage'
import resume from '../pdfs/resume.pdf'


const SideBar = ({hideWhenSmall}) => (
  <div className='sidebar'>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
          textAlign: 'center'
      }}
    >
      <Link
        to='/'
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <div className={hideWhenSmall ? 'bar-header hide' : 'bar-header'}>
          <FaceImage/>
        </div>
        <h2 style={{ margin: 0 }}>
            Matthew Phillips
        </h2>
        Full Stack Developer<br/>
        Computer Science & Mathematics Student
      </Link>
    </div>
    <Hider>
      <VerticalNav>
        <NavLink to='/experience/' className='navlink' activeClassName='navlink active'>Experience</NavLink>
        <NavLink to='/education/' className='navlink' activeClassName='navlink active'>Education</NavLink>
        <NavLink to='/skills/' className='navlink' activeClassName='navlink active'>Skills</NavLink>
        <NavLink to='/contact/' className='navlink' activeClassName='navlink active'>Contact</NavLink>
      </VerticalNav>

      <VerticalNav>
        <a href={resume} className='navlink' target='_blank'>CV</a>
      </VerticalNav>
    </Hider>
  </div>
)

export default SideBar
