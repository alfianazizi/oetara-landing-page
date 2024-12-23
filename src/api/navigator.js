const apiUrl = 'https://cms.oetara.co.id/wp-json/wp/v2';
const acf = 'acf_format=standard';
const field = '_fields=id,modified,slug,status,title,acf';
const field_by_id_name = '_fields=id,name';

const getLetter = () => {
    return fetch(apiUrl + '/navigator?'+acf+'&'+field)
    .then(response =>{
        return response.json()
    })
    .catch(err => {
        return err
    })
}

const getTeam = () => {
    return fetch(apiUrl + '/team?'+acf)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

const getNavTeam = () => {
    return fetch(apiUrl + '/navigator-team?'+acf+'&'+field_by_id_name)
    .then(response => {
        return response.json();
    }) 
    .catch(error => {
        return error;
    })
}

const getClient = () => {
    return fetch(apiUrl + '/client?'+acf+'&'+field)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

const getClientById = (id) => {
    return fetch(apiUrl + '/client/'+id+'?'+acf+'&'+field)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

const getJob = () => {
    return fetch(apiUrl + '/job?'+acf+'&'+field)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

const getJobType = () => {
    return fetch (apiUrl + '/job-type?_fields=name')
    .then(response => {
        return response.json()
    })
    .catch(error => {
        return error;
    })
}

const getJobCategory = () => {
    return fetch(apiUrl + '/job-category?_fields=name')
    .then(response => {
        return response.json()
    })
    .catch(error => {
        return error
    })
}

const getJobExperience = () => {
    return fetch(apiUrl + '/job-experience?_fields=name')
    .then(response => {
        return response.json()
    })
    .catch(error => {
        return error
    })
}

export {
    getLetter,
    getTeam,
    getNavTeam,
    getClient,
    getClientById,
    getJob,
    getJobType,
    getJobCategory,
    getJobExperience
}