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

export function get(url, params, headers) {
    return fetch(`${url}?${queryString.stringify(params)}`, {
        method: 'GET',
        headers: headers,
    })
}

export function put(url = '', data = {}, token) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
}

export function delet(url = '', data = {}, token) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
}
