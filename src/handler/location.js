'use strict'
const axios = require("axios");

module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            mesage: "hola :D",
            data: "probando ",
            event: event.body
        })
    }
}