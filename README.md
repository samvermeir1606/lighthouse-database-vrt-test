# VRT Lighthouse Scores
Using the API of PageSpeed (lighthouse) and Cron-jobs, I have made a server that takes the "accessibility"-scores of a set of urls and add them to a Postgres Database attached to this server. Each set amount of time, the cron jobs execute and the database gets filled. The reason for this is to have a record of how well our sites perform according to PageSpeed (powered by Google Lighthouse).
This is a personal project, I do not own the contents of any of those sites.
This server is currently running on Heroku, at the following url: https://sheltered-shelf-81281.herokuapp.com/.
Going to the url will give you a list of all the rows in the database, in a JSON format. To make sure the database gets filled with the right data, all the endpoints are hooked up to a cron job at https://console.cron-job.org/jobs.
To edit the server (or start any updates or changed that you would like to do), start at "app.js"

## Currently running Cronjobs
| Status | Execution moment | Brand | Main Brand | Endpoint |
| --- | --- | --- | --- | --- |
| On | Monday 06:00 | VRT NU | VRT | /urls/vrtnu/home |
| On | Monday 06:05 | VRT NU | VRT | /urls/vrtnu/tvgids |
| On | Monday 06:10 | VRT NU | VRT | /urls/vrtnu/az |
| On | Monday 06:15 | VRT NU | VRT | /urls/vrtnu/categorie |
| On | Monday 06:20 | VRT NU | VRT | /urls/vrtnu/livestream |
| On | Monday 06:25 | VRT NWS | VRT | /urls/vrtnws/home |
| On | Monday 06:30 | VRT NWS | VRT | /urls/vrtnws/kijk |
| On | Monday 06:35 | VRT NWS | VRT | /urls/vrtnws/netbinnen |
| On | Monday 06:40 | VRT NWS | VRT | /urls/vrtnws/corona |
| On | Monday 06:45 | VRT NWS | VRT | /urls/vrtnws/luister |
| On | Monday 06:50 | SPORZA | VRT | /urls/sporza/home |
| On | Monday 06:55 | SPORZA | VRT | /urls/sporza/programmagids |
| On | Monday 07:00 | SPORZA | VRT | /urls/sporza/netbinnen |
| On | Monday 07:05 | SPORZA | VRT | /urls/sporza/video |
| On | Monday 07:10 | SPORZA | VRT | /urls/sporza/voetbal |
| On | Monday 07:15 | RADIO 1 | VRT | /urls/radio1/home |
| On | Monday 07:20 | RADIO 1 | VRT | /urls/radio1/programmagids |
| On | Monday 07:25 | RADIO 1 | VRT | /urls/radio1/podcasts |
| On | Monday 07:30 | RADIO 1 | VRT | /urls/radio1/select |
| On | Monday 07:35 | RADIO 1 | VRT | /urls/radio1/deochtend |

## Currently available endpoints
### URL Endpoints
| Endpoint | Brand | MainBrand |
| --- | --- | --- |
| /urls/vrtnu/home | VRT NU | VRT |
| /urls/vrtnu/tvgids | VRT NU | VRT |
| /urls/vrtnu/az | VRT NU | VRT |
| /urls/vrtnu/categorie | VRT NU | VRT |
| /urls/vrtnu/livestream | VRT NU | VRT |
| /urls/vrtnws/home | VRT NWS | VRT |
| /urls/vrtnws/kijk | VRT NWS | VRT |
| /urls/vrtnws/netbinnen | VRT NWS | VRT |
| /urls/vrtnws/corona | VRT NWS | VRT |
| /urls/vrtnws/luister | VRT NWS | VRT |
| /urls/sporza/home | SPORZA | VRT |
| /urls/sporza/programmagids | SPORZA | VRT |
| /urls/sporza/netbinnen | SPORZA | VRT |
| /urls/sporza/video | SPORZA | VRT |
| /urls/sporza/voetbal | SPORZA | VRT |
| /urls/radio1/home | RADIO 1 | VRT |
| /urls/radio1/programmagids | RADIO 1 | VRT |
| /urls/radio1/podcasts | RADIO 1 | VRT |
| /urls/radio1/select | RADIO 1 | VRT |
| /urls/radio1/deochtend | RADIO 1 | VRT |

### Database Endpoints
| Endpoint | Action |
| --- | --- |
| /database/showall | This prints out a list of all the rows in the database (in JSON format) |
| /database/showweburl/:websiteurl | Prints out all the rows with the given "websiteURL" parameter |
| /database/showid/:row_id | Prints out the row with that specific id (given in the parameter) |
| /database/deleteall | Deletes the whole database (USE CAUTION) |
| /database/deleteone/:row_id | Deletes the entry with the given row_id as parameter (USE CAUTION) |


## Export Database
To export the PostgrSQL database locally
1) Go to the folder (in the terminal), and use the command:
heroku pg:psql
2) Then make a .csv file where you want to export it to (ex: go to downloads and make a new csv file called "exportDatabase.csv"
3) In the terminal, write: 
\copy (SELECT * FROM scores) to '/Users/vermeis/Downloads/exportDatabase.csv' with csv
4) Open the csv file in your file system


## How To's
### How to get access to the database endpoints
There are two ways you can have access:
1) Go to the main link (https://sheltered-shelf-81281.herokuapp.com/) and you'll get a list of all rows
2) Using Postman
Using Postman, you can ame a new request my adding the main link (https://sheltered-shelf-81281.herokuapp.com/) and an endpoint url together:
```https://sheltered-shelf-81281.herokuapp.com/database/showall```

### How to get the server logs in the terminal
Assuming the project is already cloned from github.
1) Open a terminal and "cd" to the right folder
2) perform the following command in the console:
```heroku logs --tail```
A list of all the logs will show up

### How to push changed to Heroku and start a new build
Assuming the project is already cloned from github
1) Commit and push any changed made using Github Desktop
2) Open the terminal, go to the right directory of the project and perform the following command:
```git push heroku main```

### How to see and interact with the database locally
Assuming the project is already cloned from github
1) Open a terminal and navigate to the right directory
2) Use the following command to interact with the database:
```heroku pg:psql```
   - When you have done this, you should be able to interact with the database and perform querries like for example:
      - ```CREATE TABLE scores (row_id serial PRIMARY KEY,websiteurl VARCHAR ( 255 ) NOT NULL,score INT NOT NULL,date TIMESTAMP NOT NULL,mainbrand VARCHAR ( 255 ) NOT NULL);```
      - ```INSERT INTO scores(websiteurl, score, date, mainbrand) VALUES ('https://www.vrt.be/vrtnu/', 80, '2021-04-04 10:57:40','VRT');```
3) to quit interacting with the database, write following command:
```\q```
4) To see information about the database, execute following command:
```heroku pg:info```










