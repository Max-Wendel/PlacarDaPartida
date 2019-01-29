import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class BotaoGol extends Component {
  handleClick(event){
    event.preventDefault();
    this.props.marcarGol();
  }
  
  
  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>Gol!</Button>
    )
  }
}
