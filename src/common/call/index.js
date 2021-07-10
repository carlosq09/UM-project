const Call = {
    requestWithBody(url, data = {}, method = 'POST') {
        return fetch(url, {
            method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status == 200) {
                return response.json()
            }
            if (response.status >= 400) {
                return response.json().then(({ error }) => {
                    throw Error(error)
                })
            }
        });
    },

    request(url, method = 'GET') {
        return fetch(url, {
            method
        }).then(response => {
            if (response.status == 200) {
                return response.json()
            }
            if (response.status >= 400) {
                return response.json().then(({ error }) => {
                    throw Error(error)
                })
            }
        });
    }
}

export default Call