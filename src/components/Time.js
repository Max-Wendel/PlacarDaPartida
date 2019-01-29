import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import BotaoGol from './BotaoGol';

export default class Time extends Component {
  render() {
    return (
      <div>
        <Typography variant="h3" gutterBottom>
            {this.props.nome}
        </Typography>
        <Typography component="h2" variant="display2" gutterBottom>
            {this.props.gols}
        </Typography>
        <BotaoGol marcarGol={this.props.marcarGol}/>
      </div>
    )
  }
}
