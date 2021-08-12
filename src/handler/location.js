'use strict'
const axios = require("axios");

const location = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            mesage: "hola :D",
            data: "probando ",
            event: event.body
        })
    }
}

exports.handler = location;