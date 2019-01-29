import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class Partida extends Component {
  render() {
    return (
      <div>
        <Typography component="h2" variant="headline" gutterBottom>
            {this.props.estadio}
        </Typography>
        <div>
            <Typography variant="subheading" gutterBottom>
                {this.props.data} - {this.props.horario}
            </Typography>
        </div>
      </div>
    )
  }
}
