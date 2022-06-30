module.exports = [
    {
        method: 'GET',
        path: '/',
        options: {
            description: 'test protected route',
            notes: 'API to test jwt',
            tags: ['api', 'cab-users'],
            cors: true,
            auth: 'jwt'
        },
        handler: async (request, h) => h.response('hello').code(200)
    }
];
