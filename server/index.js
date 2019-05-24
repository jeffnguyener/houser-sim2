require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)

massive(CONNECTION_STRING).then(database =>{
    app.set('db', database)
    console.log('Database running')
})


app.listen(SERVER_PORT, () => { console.log(`Cruising on port ${SERVER_PORT}`)
})