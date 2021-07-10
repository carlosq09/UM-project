const validate = {
    arguments(args) {
        args.forEach(({ name, value, type, notEmpty, optional }) => {
            if (value != undefined) {
                if (typeof value !== type) throw Error(`${name} ${value} is not a ${type}`)

                if (notEmpty)
                    if (type === 'string') {
                        if (!value.trim().length) throw new Error(`${name} is empty`)
                    } else if (type === 'object')
                        if (!Object.keys(value).length) throw new Error(`${name} is empty`)
            } else if (!optional) throw new Error(`${name} is not optional`)
        })
    },

    email(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(email))) throw new Error(`${email} is not an e-mail`)
    },
}

export default validate