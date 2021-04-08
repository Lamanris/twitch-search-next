require('dotenv').config()

module.exports = {
    env: {
        AUTH_TOKEN: process.env.AUTH_TOKEN,
        CLIENT_ID: process.env.CLIENT_ID
    }
}