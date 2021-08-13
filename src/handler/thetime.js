'use strict';

module.exports.handler = async (event) => {
    let time = new Date();
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Clever cabro',
            body: time
        })
    }
}