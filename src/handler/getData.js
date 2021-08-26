"use strict";

const getData = async (event) => {
  let data = "Jonathan";

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({
      name: data,
    }),
  };

  return response;
};

exports.hanlder = getData;
