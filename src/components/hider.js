import React from 'react'

class Hider extends React.Component {
  state = {
    hidden: true
  }

  hide = () => {
    this.setState({hidden: !this.state.hidden})
  }
  render() {
    return (
      <div className='hider'>
        <div onClick={this.hide} className='trigger' style={{width: '100%'}}>
          <hr style={{backgroundColor: '#ccc', margin: '10px 0px'}}/>
          <i className="fa fa-bars" style={{margin: '0px 10px'}}></i>
          <hr style={{backgroundColor: '#ccc', margin: '10px 0px'}}/>
        </div>
        <div className={this.state.hidden ? 'hidden' : '' }>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Hider
