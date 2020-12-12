const express = require('express')
const app = express();
const port = 3000
const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'huihui'
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

app.listen(port, () => {
  console.log('serve is running');
})