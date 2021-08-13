'use strict';

const toUppercasefunc = async (event) => {
    let myWord = event.word.toUpperCase();
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({
            word: myWord
        }),
    }

    return response;
}

exports.handler = toUppercasefunc;