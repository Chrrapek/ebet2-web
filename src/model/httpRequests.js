export function post(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
