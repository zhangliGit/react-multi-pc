import React, { Component } from 'react'
import { Button } from 'antd'


class Home extends Component {
  constructor (props) {
    super(props)
  }
  
  toHome () {
    window.location.href = './home.html'
  }

  render () {
    return (
      <div>
        <Button onClick = { this.toHome.bind(this) } type="primary">首页</Button>
      </div>
    )
  }
}

export default Home