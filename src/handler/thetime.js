'use strict';

module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Clever cabro',
            body: new Date()
        })
    }
}