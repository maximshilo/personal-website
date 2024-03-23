const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(cors())
app.use(bodyParser.json())

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => { console.log(`Server is listening on ${PORT}`) })