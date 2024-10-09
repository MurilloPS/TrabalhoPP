const app=require('./app');
const port=app.get('port');
const swaggerUI= require("swagger-ui-express")
const express=require("express")
const swaggerJsDoc=require("swagger-jsdoc")

const swaggerOptions={
    swaggerDefinition:{
        openapi:"3.0.0",
        info: {
            title: "API Documentation",
            version:"1.0.0",
            description: "API CRUD",
        },
        servers: [{url: "http://localhost:3003"}],
    },
    apis:[`${__dirname}/routes/*.js`],
};

const swaggerDocs= swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(express.json())


app.listen(port, () => console.log(`Run on port ${port}!`));