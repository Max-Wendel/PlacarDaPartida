import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Time from './Time';
import Partida from './Partida';

const styles = {
    root: {
      width: '100%',
      maxWidth: 500,
    },
  };

export default class PlacarContainer extends Component {
   constructor(){
       super();
       this.state = {
           gols_casa: 0,
           gols_visitante: 0,
       };
   }

   marcarGolCasa(){
       this.setState({
            gols_casa: this.state.gols_casa + 1,
       });
   }
  
   marcarGolVisitante(){
    this.setState({
         gols_visitante: this.state.gols_visitante + 1,
    });
}
  

   render() {
    const {partida, casa, visitante} = this.props;
    const estilo = {float: "left", 
                    "marginRight":"20px",
                    "marginTop":"30px", };    
    return (
        <Grid container justify={"center"} spacing={24}>
            {/* Time da Casa */}
            <Grid>
                <div style={estilo}>
                    <Typography variant="title" gutterBottom>
                        Casa
                    </Typography>
                    <Time nome={casa.nome} 
                                gols={this.state.gols_casa} 
                                marcarGol={this.marcarGolCasa.bind(this)}/> 
                </div>
            </Grid>

            {/* Dados da Partida */}
            <Grid>
                <div style={estilo}>
                    <Partida {...partida} />
                </div>        
            </Grid>

            {/* Time Visitante*/}
            <Grid>
                <div style={estilo}>
                    <Typography variant="title" gutterBottom>
                        Visitante
                    </Typography>
                    <Time nome={visitante.nome} 
                                gols={this.state.gols_visitante}
                                marcarGol={this.marcarGolVisitante.bind(this)} />
                </div>     
            </Grid>
            <div style={{clear:"both"}}/>    
        </Grid>
    )
  }
}