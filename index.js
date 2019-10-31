require("dotenv").config()

const express = require("express")

const app = express()
const knex = require("knex")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const databaseConfig = require("./knexfile")[process.env.NODE_ENV || "development"]
const database = knex(databaseConfig)


app.get("/bagels", (request, response) => {
    database("bagel").select().then(bagels => {
        response.json(bagels)
    })
})

app.get("/bagels/:id", (request, response) => {
    database("bagel").select().where({id: request.params.id}).first().then(bagels => {
        response.json(bagels)
    })
})

app.post("/bagels", (request, response) => {
    database("bagel").insert({
        type: request.body.type,
        rating: request.body.rating,
    }).returning("*").then(bagels => {
        response.json(bagels[0])
    })
})

app.put("/bagels/:id", (request, response) => {
    database("bagel").update({
        type: request.body.type,
        rating: request.body.rating,
    }).where({ id: request.params.id }).then(bagels => {
        response.json(bagels[0])
    })
})

app.delete("/bagels/:id", (request, response) => {
    database("bagel").del()
        .where({ id: request.params.id }).then(bagels => {
            response.json(bagels[0])
        })
})

app.listen(process.env.PORT || 4000)
