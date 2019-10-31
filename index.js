//require("dotenv").config()

const express = require("express")
const app = express()

const knex = require("knex")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

app.get("/", (request, response) => {
    response.send("Hooray!")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

/*
console.log(process.env.NODE_ENV)
const databaseConfig = require("./knexfile")[process.env.NODE_ENV || "development"]
const database = knex(databaseConfig)

app.get("/", (request, response) => {
    response.send("Hooray!")
})

app.get("/bagels", (request, response) => {
    console.log("Getting all bagels")
    database("bagel").select().then(bagels => {
        response.json(bagels)
    }).catch(error => console.error(error.message))
})

app.get("/bagels/:id", (request, response) => {
    console.log("Getting one bagel")
    database("bagel").select().where({id: request.params.id}).first().then(bagels => {
        response.json(bagels)
    }).catch(error => console.error(error.message))
})

app.post("/bagels", (request, response) => {
    console.log("Adding a bagel")
    database("bagel").insert({
        type: request.body.type,
        rating: request.body.rating,
    }).returning("*").then(bagels => {
        response.json(bagels[0])
    }).catch(error => console.error(error.message))
})

app.put("/bagels/:id", (request, response) => {
    console.log("Updating a bagel")
    database("bagel").update({
        type: request.body.type,
        rating: request.body.rating,
    }).where({ id: request.params.id }).then(bagels => {
        response.json(bagels[0])
    }).catch(error => console.error(error.message))
})

app.delete("/bagels/:id", (request, response) => {
    console.log("Deleting a bagel")
    database("bagel").del()
        .where({ id: request.params.id }).then(bagels => {
            response.json(bagels[0])
    }).catch(error => console.error(error.message))
})

app.use((error, request, response, next) => {
    console.error(error)
    response.json({ error })
})
*/
