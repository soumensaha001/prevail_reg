const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Add mysql database connection
const db = mysql.createPool({
  host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
  user: 'MYSQL_USER', // database user MYSQL_USER: MYSQL_USER
  password: 'MYSQL_PASSWORD', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'prevail' // database name MYSQL_HOST_IP: mysql_db
})

// Enable cors security headers
app.use(cors())

// add an express method to parse the POST method
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', (req, res) => {
  res.send('Hi There')
});

// get all of the candidates in the database
app.get('/get', (req, res) => {
  const SelectQuery = " SELECT * FROM  prevail_reg";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
})

// add a book to the database
app.post("/insert", (req, res) => {
  const name = req.body.setCandidateName;
  const email = req.body.setEmail;
  const InsertQuery = "INSERT INTO prevail_reg (name, email) VALUES (?, ?)";
  db.query(InsertQuery, [name, email], (err, result) => {
    console.log(result)
  })
})

// delete a candidate from the database
app.delete("/delete/:candidateId", (req, res) => {
  const candidateId = req.params.candidateId;
  const DeleteQuery = "DELETE FROM prevail_reg WHERE id = ?";
  db.query(DeleteQuery, candidateId, (err, result) => {
    if (err) console.log(err);
  })
})


app.listen('3001', () => { })