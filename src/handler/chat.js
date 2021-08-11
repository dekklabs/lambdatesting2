'use strict';

module.exports.handler = async (event) => {

    let people = [
        {
            name: "Jonathan",
            lastname: "Testing Response"
        },
        {
            name: "Response",
            lastname: "Dekk"
        }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(people),
    }
}