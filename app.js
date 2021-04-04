const express = require('express')
const app = express()
const port = 3000
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
	console.log("NEW Testing websiteurl");
	var request = new XMLHttpRequest()

	console.log("Making reaquest");


	request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
	console.log("opening reaquest");
	request.onload = function () {
		console.log("Inside OnLoad");
		// Begin accessing JSON data here
		var data = JSON.parse(this.response)
		console.log("Data Processed OnLoad");
		if (request.status >= 200 && request.status < 400) {
			console.log("Inside status");
		  	data.forEach((movie) => {
		    	console.log(movie.title)
		  	})
		} else {
		  console.log('error')
		}
	}
	console.log("Onload reaquest");
	request.send()
	console.log("Send reaquest");
	res.send("DONE")




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



