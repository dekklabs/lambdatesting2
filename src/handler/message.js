'use strict'

module.exports.handler = async (event) => {
    let persona = "Jonathan";
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: "Dekk",
            body: "Working :D",
            lastname: persona,
        })
    }
}