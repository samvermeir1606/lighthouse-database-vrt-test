const express = require('express')
const app = express()
const port = 3000


const { Client } = require('pg');
//
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
//
client.connect();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  	console.log("")
})


// Add Row To Database
app.get('/testing/:websiteurl',function(req,res){
	client.query("SELECT * FROM scores;", (err, outcome) => {   
		if (err) throw err;
		console.log(outcome)
	})
})

app.get('/testing/showall',function(req,res){
	client.query("SELECT * FROM scores;", (err, outcome) => {   
		if (err) throw err;
			res.send("DONE")
			console.log("ShowAll requested: responded SUCCESS")
	})

})



