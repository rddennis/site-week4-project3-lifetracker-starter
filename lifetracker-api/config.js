const config = require('dotenv').config("/.env")

const getDatabaseUri = () => {

    let db_uri = process.env.DATABASE_URI

    if (db_uri) {
        return db_uri
    } else {
        let user = process.env.DATABASE_USER
        let pass = process.env.DATABASE_PASS
        let host = process.env.DATABASE_HOST
        let port = process.env.DATABASE_PORT
        let db_name = process.env.DATABASE_NAME

        let db_string = `postgres://${user}:${pass}@${host}:${port}/${db_name}`
        return db_string
    }

}

// process.env.NODE_ENV == 'test' ? export IS_TESTING=True;

module.exports = { getDatabaseUri }