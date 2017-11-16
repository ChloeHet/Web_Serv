module.exports = {
    attributes: {
        // An address may only belong to a single user
        name: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        zipCode: {
            type: 'string'
        },
        state: {
            type: 'string'
        },
        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
};