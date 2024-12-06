const apiUrl = 'https://cms.oetara.co.id/wp-json/wp/v2';
const acf = 'acf_format=standard';
const acf_highlight = 'acf_format=standard&highlight=true';
const field = '_fields=id,modified,slug,status,title,acf';

const getWork = () => {
    return fetch(apiUrl + '/work?'+acf+'&'+field)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

const getWorkHighlight = () => {
    return fetch(apiUrl + '/work?'+acf_highlight+'&'+field)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

export {
    getWork,
    getWorkHighlight
}