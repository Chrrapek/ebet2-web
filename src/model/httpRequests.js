const queryString = require('query-string');

export function post(url = '', data = {}, token) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
}

export function get(url = '', token) {
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": token
        }
    })
}

export function betterGet(url, params, headers) {
    return fetch(`${url}?${queryString.stringify(params)}`, {
        method: 'GET',
        headers: headers,
    })
}