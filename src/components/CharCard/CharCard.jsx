import React, { useEffect, useState, useCallback } from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Chip, CardHeader, Avatar} from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import { getEpisodeByUrl } from '../../req';
import {BsPersonBoundingBox, BsQuestionSquare} from 'react-icons/bs';
import {BiStreetView} from 'react-icons/bi';
import {IoPlanetOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom';

const CharCard = (props) => {
    const char = props.char;
    const [hide, setHide] = useState(false);
    const [chip, setChip] = useState({});
    const [episode, setEpisode] = useState({});

    const handleEpi = useCallback(async () => {
        if (char.episode) {
            const lastEpiId = char.episode.pop();
            const lastEpiData = await getEpisodeByUrl(lastEpiId);
            setEpisode(lastEpiData);
        }else{
            setEpisode({episode: 'Unknown'});
        }
    }, [char.episode]);

    const checkStatus = useCallback((callback) => {
        switch(char.status) {
            case "Alive":
                setChip({active: true, color: 'primary', label: 'Alive', icon: <CheckCircleOutlineRoundedIcon />});
                break;
            case "Dead":
                setChip({active: true, color: 'secondary', label: 'Dead', icon: <HighlightOffRoundedIcon />})
                break;
            case "unknown":
                setChip({active: true, color: 'default', label: 'Unknown', icon: <ErrorOutlineRoundedIcon />})
                break;
            default:
                break;
        }
        callback();
    }, [char.status])

    useEffect(() => {
        checkStatus(handleEpi);
    }, [checkStatus, handleEpi])
    
    

    const handleClick = () => {
        setHide(!hide);
    }

    return (
        
        <Grid item xs={6} lg={2} md={2} sm={3} key={char.id}>
            <Card hidden={hide} onClick={handleClick} elevation={3} style={{ minHeight: '320px', height: '100%', position: 'relative', cursor: 'pointer'}}>
                    <CardMedia component="img" src={char.image} style={{height: '50%'}}/>
                    <CardContent>
                        <Typography noWrap>{char.name}</Typography>
                    </CardContent>
                    <CardActions disableSpacing style={{position: 'absolute', bottom:0}}>
                        {chip.active && <Chip py={1} component="span" color={chip.color} size="small" label={chip.label} icon={chip.icon}/>}
                    </CardActions>
                </Card>
            <Card hidden={!hide} onClick={handleClick} elevation={3} style={{minHeight: '320px', height: '100%', position: 'relative'}}>
                    <CardHeader title={char.name} avatar={
                        <Avatar src={char.image} alt={char.name}/>
                    }/>
                    <CardContent style={{padding: 20}}>
                        <Typography display="block" variant="button" gutterBottom><BsQuestionSquare />      {chip.label}</Typography>
                        <Typography display="block" variant="button" gutterBottom><BsPersonBoundingBox />       {char.gender}</Typography>
                        <Typography display="block" variant="button" gutterBottom><IoPlanetOutline />        {char.origin?.name}</Typography>
                        <Typography display="block" variant="button" gutterBottom><BiStreetView />      {episode?.episode || ''}</Typography>
                    </CardContent>
                    <CardActions style={{position: 'absolute', bottom:0}}>
                        <Link to={`/character/${char.id}`}>
                            <Button color="default" variant='outlined'>More ...</Button>
                        </Link>
                    </CardActions>
            </Card>
        </Grid>
        
    )
}

export default CharCard
