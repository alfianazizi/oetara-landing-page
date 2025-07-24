const apiUrl = 'https://cms.oetara.co.id/wp-json/wp/v2';
const acf = 'acf_format=standard';
const acf_slug = 'acf_format=standard&slug='
const acf_highlight = 'acf_format=standard&highlight=true';
const field = '_fields=id,modified,slug,status,title,acf';

const getWork = async (per_page = 100) => {
    const res = await fetch(apiUrl + '/work?'+acf+'&'+field+'&per_page='+per_page)
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();

    return data;
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
    getWork,
    getWorkHighlight,
    getWorkById
}