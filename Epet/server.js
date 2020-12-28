const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: '103.127.81.226',
    user: 'xhtmttop_epet',
    password: 'zhanghanxiao',
    database: 'xhtmttop_epet'
})

connection.connect()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});

app.get('/fg', (req, res) =>{
    var id = req.query.id;
    console.log(id)
    connection.query(`SELECT * from res limit ${id*6}`, function (err, rows, fields) {
        if (err) throw err;

        res.send(rows);
    })})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));