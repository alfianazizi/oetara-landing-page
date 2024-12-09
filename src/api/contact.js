const apiUrl = 'https://cms.oetara.co.id/wp-json/contact-form-7/v1/contact-forms/85/feedback'

const postForm = (body) => {
    return fetch(apiUrl, body)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

export {
    postForm
}