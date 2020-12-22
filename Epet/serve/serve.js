const express = require('express')
const app = express();
const port = 3000
const mysql = require('mysql')

var connection = mysql.createConnection({
  host: '103.127.81.226',
  user: 'xhtmttop_epet',
  password: 'zhanghanxiao',
  database: 'xhtmttop_epet'
})

connection.connect()


app.get('/brand/:id', (req, res) => {
  var id = req.params.id
  connection.query(`select * from brandsale where type_id=${id}`, (err, data) => {
    if (err) {
      console.log(err);
    }

    res.send(data)
  })
})

app.get('/sale', (req, res) => {
  var page = req.query.page;
  connection.query(`select * from sale limit ${(page - 1)*12},12`, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data)
  })
})

app.get('/sale/page', (req, res) => {
  connection.query(`select * from sale`, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data)
  })
})

app.listen(port, () => {
  console.log('serve is running');
})