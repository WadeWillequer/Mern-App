const secrets = {
    //the url that we use to connect to the mongodb atlas cluster
    dbUrl: 'mongodb+srv://WadeW:skrhqla420@cluster0-5xxfs.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;