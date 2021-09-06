import React, {useState, useCallback, useEffect} from 'react'
import Header from '../../components/Header';
import List from '../../components/List';
import useStyles from '../../theme/Styles';
import Pagination from '@material-ui/lab/Pagination';
import { Container, Typography, Grid } from '@material-ui/core';
import * as api from '../../req';

const Home = () => {
    const [lista, setLista] = useState([{}]);
    const [info, setInfo] = useState(undefined);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const classes = useStyles();

  const handleSearch = useCallback(async () => {
    if (searchValue?.length > 2 && searchValue){
      const dados = await api.searchByName(searchValue, page);
      setLista(dados.results);
      setInfo(dados.info);
    }
  },[page, searchValue]);
  
  const handleGet = useCallback(async () => {
    if (!searchValue) {
      const dados = await api.getPage(page);
      setInfo(dados.info);
      setLista(dados.results);
    }else{
      setPage(1);
      handleSearch(searchValue);
    }
  }, [searchValue, page, handleSearch]);
  

  useEffect(() => {
    if (searchValue === '') {
      handleGet();
    }else{
      handleSearch();
    }
  },[handleGet, handleSearch, searchValue])

    return (
      <>
        <Header callBack={setSearchValue} value={searchValue} show/>
        <Container maxWidth="lg">
          {lista ? <List lista={lista} /> : <Grid item xs={12}><Typography variant="h5">Nothing here...</Typography></Grid>}
          <div className={classes.pagination}>
          <Pagination count={info?.pages} color="primary" page={page} onChange={(e, value) => setPage(value)}/>
          </div>
        </Container>
      </>
    )
}

export default Home;