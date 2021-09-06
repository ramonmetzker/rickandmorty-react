import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import * as api from '../../req';

const Character = ({match}) => {
    const charId = match.params.charId;
    const [char, setChar] = useState({});

    useEffect(() => {
        async function fetchData() {
            let gottenChar = await api.getCharById(charId)
            setChar(gottenChar);
        }
        fetchData();
    }, [char, charId])

    return (
        <>
            <Header show={false} />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h3" style={{padding: '5px 15px'}}>{char.name}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Paper al>
                        <img src={char.image} alt={char.name} style={{width: '100%', padding: '5px'}}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Character
