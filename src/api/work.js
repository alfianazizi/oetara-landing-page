const apiUrl = 'https://cms.oetara.co.id/wp-json/wp/v2';
const acf = 'acf_format=standard';
const acf_slug = 'acf_format=standard&slug='
const acf_highlight = 'acf_format=standard&highlight=true';
const field = '_fields=id,modified,slug,status,title,acf';

const getWorkById = (slug) => {
    return fetch(apiUrl + '/work?'+acf_slug + slug+'&'+field)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

export {
    getWorkById
}