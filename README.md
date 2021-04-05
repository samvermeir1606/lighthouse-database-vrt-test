# lighthouse-database-vrt-test







To export the PostgrSQL database locally
1) Go to the folder (in the terminal), and use the command:
heroku pg:psql
2) Then make a .csv file where you want to export it to (ex: go to downloads and make a new csv file called "exportDatabase.csv"
3) In the terminal, write: 
\copy (SELECT * FROM scores) to '/Users/vermeis/Downloads/exportDatabase.csv' with csv
4) Open the csv file in your file system
