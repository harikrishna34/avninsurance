const mongoose = require('mongoose')
const config = require('./config/dbenv')
const express = require('express')
const customerroute = require('./routes/customerroute')
// const { host, port, database } = config.db
// const DB_URL = `mongodb://${host}:${port}/${database}`
const bodyParser = require('body-parser')
const employeeroute = require('./routes/employeeroute')
const db=require('./config/dbenv')
const DB_URL=db.DB_URL
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express()
const PORT = 3300
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
        // Your application logic here
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(customerroute)
        app.use(employeeroute)
        // Swagger configuration options
        // Swagger configuration options
        const swaggerOptions = {
            swaggerDefinition: {
                openapi: '3.0.0',
                info: {
                    title: "Insurance API's",
                    version: '1.0.0',
                    description: 'API documentation generated with Swagger',
                },
                servers: [
                    {
                        url: 'http://localhost:3300',
                    },
                ],
            },
            apis: ['./routes/*.js'], // Use wildcard to include all route files in the 'routes' folder
        }

        // Initialize Swagger-jsdoc
        const swaggerSpec = swaggerJsdoc(swaggerOptions)

        // Serve the Swagger documentation using Swagger UI
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err))
