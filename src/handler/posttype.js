'use strict'

const posttype = async (event) => {
    let body = event.body;

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: JSON.stringify({
            data: body
        })
    }

    return response;
}

exports.handler = posttype;