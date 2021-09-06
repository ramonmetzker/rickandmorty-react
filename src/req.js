
const URL_BASE = 'https://rickandmortyapi.com/api';

export async function getList() {
    const data = fetch(URL_BASE+'/character')
        .then(res => res.json())
        .then(res => {return res});
    return data;
}

export async function searchByName(name, page) {
    const data = fetch(URL_BASE+'/character/?page='+page+'&name='+name)
        .then(res => res.json())
        .then(res => {return res})
        .catch(err => {console.log(err)});
    return data;
}

export async function getPage(page) {
    const data = fetch(URL_BASE+'/character/?page='+page)
        .then(res => res.json())
        .then(res => {return res})
        .catch(err => console.log(err));
    return data;
}

export async function getEpisode(id) {
    const data = fetch(URL_BASE+'/episode/'+id)
        .then(res => res.json())
        .then(res => {return res})
        .catch(err => console.log(err));
    return data;
}

export async function getEpisodeByUrl(url) {
    const data = fetch(url)
        .then(res => res.json())
        .then(res => {return res})
        .catch(err => console.log(err));
    return data;
}

export async function getCharById(id) {
    const data = fetch(URL_BASE+'/character/'+id)
        .then(res => res.json())
        .then(res => {return res})
        .catch(err => console.log(err));
    return data;
}