'use strict';

const thetime = async (event) => {
    let time = new Date();
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Clever cabro',
            date: time,
            status: "mongolito",
            img: "https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F213624145_580157956332867_8515576645853931502_n.jpg%3Fccb%3D11-4%26oh%3Dec251da9e9846334f2b37260fadab1b9%26oe%3D6119D9A2&t=l&u=51921301049%40c.us&i=1628477939&n=uDagq5gYIi6so%2BU7xHlGhOnYk3%2F7fjG1HpwSC56vld4%3D"
        })
    }
}

exports.handler = thetime;