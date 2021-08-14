'use strict'

const posttype = async (event) => {
    let body = event.body;

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            data: body
        })
    }

    return response;
}

exports.handler = posttype;