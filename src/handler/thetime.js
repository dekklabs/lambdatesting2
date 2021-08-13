'use strict';

const theTime = async (event) => {
    let time = new Date();
    let response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Clever cabro',
            body: time
        })
    }

    return response;
}

exports.handler = theTime;