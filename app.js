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
app.get('/urls/vrtnu/home',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnu/","VRT",res)
})
app.get('/urls/vrtnu/tvgids',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnu/tv-gids/","VRT",res)
})
app.get('/urls/vrtnu/az',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnu/a-z/#searchtype=programs","VRT",res)
})
app.get('/urls/vrtnu/categorie',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnu/categorieen/","VRT",res)
})
app.get('/urls/vrtnu/livestream',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnu/livestream/","VRT",res)
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


function FetchingURL(url,mainbrand,res){
	console.log("Fetching PageSpeed info for url: "+url);
	fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='+url+'&category=accessibility')
		.then(response => response.json())
		.then(data => {
			console.log("Fetching PageSpeed info for url: "+url+" SUCCEEDED with score of: "+data.lighthouseResult.categories.accessibility.score*100)
			AddToDatabase(url,data.lighthouseResult.categories.accessibility.score*100,mainbrand)
			res.send("DONE")
			console.log("DONE")
	  });
}

function AddToDatabase(url,score,mainbrand) {
	console.log("Adding Entry to the database...")
	var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');

	client.query("INSERT INTO scores(websiteurl, score, date, mainbrand) VALUES ('"+url+"', "+score+",'"+formatedMysqlString +"','"+mainbrand+"');", (err, outcome) => {   
		if (err) throw err;
		else {
			console.log("Adding Entry to the database... SUCCEEDED")
		}
	})
}


/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/
Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

