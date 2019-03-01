import React from 'react'

import { Link } from 'gatsby'

const NavLink = ({children, ...other}) => (
  <Link {...other}>{children}</Link>
)

NavLink.defaultProps = {
  className: 'navlink',
  activeClassName: 'navlink active'
}

export default NavLink
