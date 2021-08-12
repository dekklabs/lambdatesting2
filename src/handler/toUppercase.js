'use strict';

const toUppercasefunc = async (event) => {
    let myWord = event.word.toUpperCase();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            word: myWord
        }),
    }

    return response;
}

exports.handler = toUppercasefunc;