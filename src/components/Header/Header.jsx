import React from 'react';
import {AppBar, Toolbar, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../../theme/Styles';
import Logo from '../../media/rickandmorty.svg'
import {Link} from 'react-router-dom';

const Header = (props) => {
    const classes = useStyles();

    const handlePesquisa = (value) => {
        props.callBack(value);
    }   
    
    return (
        <div>
        <AppBar position="fixed" style={{backgroundColor: '#24325fff'}}>
            <Toolbar>
            <Box className={classes.title} alignItems="center">
                    <Link to={"/"}>
                    <img src={Logo} alt="Rick and Morty" width="150px"/>
                    </Link>
            </Box>
            {props.show && (
            <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Find character…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => handlePesquisa(e.target.value)}
                    value={props.value}
                    />
                </div>
            )}
            </Toolbar>
        </AppBar>
        <Toolbar />
        <Toolbar />
        </div>
    )
}

export default Header


