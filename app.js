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
  //res.send('Hello World!')

	client.query("SELECT * FROM scores;", (err, outcome) => {   
			if (err) throw err;
			else {
				//res.send(outcome)


				//var out=""
				//out+="ALL DATA FROM DATABASE\n"
				//out+="----------------------\n"
				////calculating header width
				//var rowWidth_rowID=7;
				//var rowWidth_websiteURL=0;
				//for (var i = 0; i < outcome.rows.length; i++) {
				//	if (rowWidth_websiteURL<outcome.rows[i].websiteurl.length) {
				//		rowWidth_websiteURL=outcome.rows[i].websiteurl.length;
				//	}
				//	
				//}
				//rowWidth_websiteURL+=2;
				//
				//var rowWidth_score=7;
				//var rowWidth_date=26;
				//var rowWidth_mainbrand=0;
				//for (var i = 0; i < outcome.rows.length; i++) {
				//	if (rowWidth_mainbrand<outcome.rows[i].mainbrand.length) {
				//		rowWidth_mainbrand=outcome.rows[i].mainbrand.length;
				//	}
				//	
				//}
				//rowWidth_mainbrand+=2;
				//
				////headers
				//out+=" row_ID | ";
				//for (var i = 0; i < (rowWidth_websiteURL-10)/2; i++) {
				//	out+=" "
				//}
				//out+="websiteUrl"
				//for (var i = 0; i < (rowWidth_websiteURL-10)/2; i++) {
				//	out+=" "
				//}
				//out+="| score |           date           |"
				//
				//if (rowWidth_mainbrand<=9) {
				//	out+=" mainBrand |"
				//}
				//else{
				//	for (var i = 0; i < (rowWidth_mainbrand-9)/2; i++) {
				//		out+=" "
				//	}
				//	out+="mainBrand"
				//	for (var i = 0; i < (rowWidth_mainbrand-9)/2; i++) {
				//		out+=" "
				//	}
				//}
				//out+="\n"
				//
				////populating table
				//for (var i = 0; i < outcome.rows.length; i++) {
				//	//ROW ID
				//	out+=" "+outcome.rows[i].row_id;
				//	if (outcome.rows[i].row_id<10) {
				//		for (var i = 0; i < rowWidth_rowID-2; i++) {
				//		out+=" ";
				//		}
				//	}
				//	else if (outcome.rows[i].row_id<100) {
				//			for (var i = 0; i < rowWidth_rowID-3; i++) {
				//			out+=" ";
				//			}
				//	}
				//	else if (outcome.rows[i].row_id<1000) {
				//			for (var i = 0; i < rowWidth_rowID-4; i++) {
				//			out+=" ";
				//			}
				//	}
				//	out+="|"
				//	//WebsiteURL
				//	out+=" "+outcome.rows[i].websiteurl;
				//	for (var i = 0; i < rowWidth_websiteURL-outcome.rows[i].websiteurl.length-1; i++) {
				//		out+=" ";
				//		}
				//	
				//	out+="|"
				//	//SCORE
				//	out+=" "+outcome.rows[i].score;
				//	if (outcome.rows[i].score<10) {
				//		for (var i = 0; i < rowWidth_rowID-2; i++) {
				//		out+=" ";
				//		}
				//	}
				//	else if (outcome.rows[i].score<100) {
				//			for (var i = 0; i < rowWidth_rowID-3; i++) {
				//			out+=" ";
				//			}
				//	}
				//	else {
				//		out+="  ";
				//	}
				//	out+="|"
				//
				//	//Date
				//	out+=" "+outcome.rows[i].date+" |";
				//
				//	//MainBrand
				//	out+=" "+outcome.rows[i].mainbrand;
				//	for (var i = 0; i < rowWidth_mainbrand-1-outcome.rows[i].mainbrand.length; i++) {
				//	out+=" ";
				//	}
				//	out+=" |";
				//}



				//res.send(out)
				
				res.send("test")
				

				//res.send("ShowAll requested: responded SUCCESS")
			}
		})



})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  	console.log("")
})


// VRT NU
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


// VRT NWS
app.get('/urls/vrtnws/home',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnws/nl/","VRT",res)
})
app.get('/urls/vrtnws/kijk',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnws/nl/rubrieken/kijk/","VRT",res)
})
app.get('/urls/vrtnws/netbinnen',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnws/nl/net-binnen/","VRT",res)
})
app.get('/urls/vrtnws/corona',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnws/nl/dossiers/2020/01/coronavirus-china/","VRT",res)
})
app.get('/urls/vrtnws/luister',function(req,res){
	FetchingURL("https://www.vrt.be/vrtnws/nl/rubrieken/luister/","VRT",res)
})


// SPORZA
app.get('/urls/sporza/home',function(req,res){
	FetchingURL("https://sporza.be/nl/","VRT",res)
})
app.get('/urls/sporza/programmagids',function(req,res){
	FetchingURL("https://sporza.be/nl/programmagids/","VRT",res)
})
app.get('/urls/sporza/netbinnen',function(req,res){
	FetchingURL("https://sporza.be/nl/pas-verschenen/","VRT",res)
})
app.get('/urls/sporza/video',function(req,res){
	FetchingURL("https://sporza.be/nl/videozone/","VRT",res)
})
app.get('/urls/sporza/voetbal',function(req,res){
	FetchingURL("https://sporza.be/nl/categorie/voetbal/","VRT",res)
})


// Radio 1
app.get('/urls/radio1/home',function(req,res){
	FetchingURL("https://radio1.be/","VRT",res)
})
app.get('/urls/radio1/programmagids',function(req,res){
	FetchingURL("https://radio1.be/programmagids","VRT",res)
})
app.get('/urls/radio1/podcasts',function(req,res){
	FetchingURL("https://radio1.be/de-podcasts-van-radio1","VRT",res)
})
app.get('/urls/radio1/select',function(req,res){
	FetchingURL("https://radio1.be/luister/select","VRT",res)
})
app.get('/urls/radio1/deochtend',function(req,res){
	FetchingURL("https://radio1.be/programma/de-ochtend","VRT",res)
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
			console.log(data.lighthouseResult.categories.accessibility.score)
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

