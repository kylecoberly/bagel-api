require("dotenv").config()

const express = require("express")

const app = express()
const knex = require("knex")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

console.log(process.env.NODE_ENV)
const databaseConfig = require("./knexfile")[process.env.NODE_ENV || "development"]
const database = knex(databaseConfig)


app.get("/bagels", (request, response) => {
    database("bagel").select().then(bagels => {
        response.json(bagels)
    }).catch(error => console.error(error.message))
})

app.get("/bagels/:id", (request, response) => {
    database("bagel").select().where({id: request.params.id}).first().then(bagels => {
        response.json(bagels)
    }).catch(error => console.error(error.message))
})

app.post("/bagels", (request, response) => {
    database("bagel").insert({
        type: request.body.type,
        rating: request.body.rating,
    }).returning("*").then(bagels => {
        response.json(bagels[0])
    }).catch(error => console.error(error.message))
})

app.put("/bagels/:id", (request, response) => {
    database("bagel").update({
        type: request.body.type,
        rating: request.body.rating,
    }).where({ id: request.params.id }).then(bagels => {
        response.json(bagels[0])
    }).catch(error => console.error(error.message))
})

app.delete("/bagels/:id", (request, response) => {
    database("bagel").del()
        .where({ id: request.params.id }).then(bagels => {
            response.json(bagels[0])
    }).catch(error => console.error(error.message))
})

app.use((error, request, response, next) => {
    console.error(error)
    response.json({ error })
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Starting...")
})
