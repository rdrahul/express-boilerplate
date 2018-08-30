module.exports = {
    development: {
        provider: 'mongodb',
        connectionString: 'mongodb://127.0.0.1/expressboilerplate-development',
        paginationItems: 10

    },
    test: {
        provider: 'mongodb',
        connectionString: 'mongodb://127.0.0.1/expressboilerplate-test',
        paginationItems: 10
    },
    production: {
        provider: 'mongodb',
        connectionString: 'mongodb://127.0.0.1/expressboilerplate-production',
        paginationItems: 10
    }
}