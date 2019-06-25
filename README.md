# Train-Schedule-Firebase-Project

For this project we were asked to build an application for train schedules that will be able to be updated in real-time using a Firebase database.  It also needed the ability to add a new train and its destination, the frequency of the train, the next train time, and how many minutes until the next train would arrive.  That would then have to be added to the database and then updated on the site also.

Setting up the HTML and css was done by using Bootstrap to layout the title area, table form where the train information is shown from the database, and a form for the admin to add a new train.  This was fairly easy to layout using Bootstrap, and the few other colors and layout aspects were added through a linked CSS page.  Then a linked Javascript and jQuery file was used to configure and initialize the interactivity with the Firebase database, to take the information of the added train and push it to our database, and then update the application in real time.  One aspect that was a little buggy to implement was using Moment JS to calculate the train time and frequency, and then using a formula to calculate the minutes until the next train, as well as the next time that train would arrive.

One other aspect that I found to be slightly difficult was in the form we had been asked to have the user input the train time in military time, but talking with another colleague, he had suggested to instead taking the input as "time", input it as a string or "text" and then parsing the time on the back end.  I did try to work that into my page but in the end I kept it as is because the user will input the train time in AM/PM time, it will convert it to 24-hour time in the code, and then I formatted the output in our table back to normal 12-hour AM/PM time.  In the future I will look further into the formatting and different types of input that HTML can provide.  The last aspect I had added that took a little bit of time was adding the current time to the page, but using the Moment JS library I was able to format it correctly to the top of the table.  Also, in the future I would like to delve deeper into adding a login option for users, and adding the remove function for each train in the train database.  But feel free to add a train and watch it show up on the board!

### Getting Started & Prerequisites

To install or use this software, the only prerequisite would be to navigate to the hosted page through GitHub here, or to clone the repo and open the index.html page on the user's local machine.  The CSS and JavaScript page are linked to the HTML page and will run on its own.

## Built With

* [HTML] - Front End Design
* [Bootstrap](https://getbootstrap.com/docs/4.3/layout/overview/) - Front End Design
* [CSS3] - Front End Design
* [JavaScript] - Added Interactivity
* [jQuery] - Added Interactivity
* [Firebase Database](https://firebase.google.com/) - Used to generate and maintian database
* [Moment JS](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript

## Authors

* **Matt Williams** - *Initial work* - [M Williams Portfolio](https://mattwills09.github.io/portfolio.html)
