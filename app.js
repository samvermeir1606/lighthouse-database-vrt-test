const express = require('express')
const app = express()
const port = 3000
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");


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
app.get('/testing/fetchingurl',function(req,res){
	console.log("Inserting new value into database");
	fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.vrt.be/vrtnu/&category=accessibility&category=performance')
	  .then(response => response.json())
	  .then(data => {
	  	console.log(data.lighthouseResult.categories.accessibility.score)
	  	res.send("DONE")

		client.query("INSERT INTO scores(websiteurl, score, date, mainbrand) VALUES ('https://www.vrt.be/vrtnu/', "+data.lighthouseResult.categories.accessibility.score+",'"+Date()+"','VRT');", (err, outcome) => {   
			if (err) throw err;
			else {
				res.send(outcome)
				console.log("Insert requested: responded SUCCESS")
			}
		})



	  });



	//console.log("Testing websiteurl");
	//let request= new XMLHttpRequest();
	//request.open("GET","https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.vrt.be/vrtnu/&category=accessibility&category=performance");
	//request.send();
	//request.onload=()=>{
	//	//console.log(request);
	//	if (request.status===200) {
	//		console.log("testing...");
	//		//let jsontest=JSON.parse(request);
	//		console.log("Done Parsing..");
	//		//console.log(jsontest.lighthouseResult.categories.accessibility.score)
	//		//console.log(JSON.parse(request.response));
	//		console.log("testing DONE!!!");
	//	}
	//	else {
	//		console.log('error ${request.status} ${request.statusText}');
	//	}
	//	console.log(request.response.lighthouseResult);
	//	//console.log(request.lighthouseResult);
	//}
})

app.get('/testing/showall',function(req,res){
	client.query("SELECT * FROM scores;", (err, outcome) => {   
		if (err) throw err;
		else {
			res.send(outcome)
			console.log("ShowAll requested: responded SUCCESS")
		}
	})

})



