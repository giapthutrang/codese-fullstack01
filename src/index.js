const express = require('express');

const { response, request } = require('express');

const pool = require('./routers/db')

const app = express();


const callback = () => {
    console.log(" running at 5000");
}


const categoryRoute = require('./routers/category');
app.use('/api/v1/category', categoryRoute);
app.get('/', (request, response) => {
    // pool.query('select * from `user`;', (err, data) => {
    //     if (err) response.send('error query')
    //     console.log(data);
    //     response.send(data)
    // })
    response.send("ok")
})

app.listen(5000, callback)



