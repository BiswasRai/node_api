const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "User API",
      version: "1",
      description: "API",
    },
    basePath: "/api/v1",
    // servers: ["http://localhost:5000/api/v1"],
  },
  apis: ["./router/*.js", "./docs/*.yaml"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
