import React from 'react'
import {Grid} from '@material-ui/core';
import CharCard from '../CharCard';

const List = (props) => {
    const lista = props.lista;
    return (
        <Grid container spacing={2} alignContent="center" justifyContent="center">
         { lista.map((char, key) => (<CharCard char={char} key={key} />)) }
        </Grid>
    )
}

export default List;