import React from 'react'
import Grid from '@material-ui/core/Grid';

import PlacarContainer from './PlacarContainer';
import NavBar from './NavBar';

const dados = {
    partida: {
        estadio : "Maracanã/RJ",
        data: "01/06/2016",
        horario: "19h",
    },
    casa: {
        nome: "Vasco",
    },
    visitante: {
        nome: "Flamengo",
    }
};

export default class App extends React.Component{
    render(){
        return (
            <div>
                <NavBar/>
                <Grid container justify = "center">
                    <PlacarContainer {...dados} />
                </Grid>
            </div>
            );
    }
}