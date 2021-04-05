# lighthouse-database-vrt-test
This is the code for a server that is currently running on Heroku. The endpoints of the server are connected to a list of cronjobs at https://console.cron-job.org/jobs 
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


To export the PostgrSQL database locally
1) Go to the folder (in the terminal), and use the command:
heroku pg:psql
2) Then make a .csv file where you want to export it to (ex: go to downloads and make a new csv file called "exportDatabase.csv"
3) In the terminal, write: 
\copy (SELECT * FROM scores) to '/Users/vermeis/Downloads/exportDatabase.csv' with csv
4) Open the csv file in your file system
