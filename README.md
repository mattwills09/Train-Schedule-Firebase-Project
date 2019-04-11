# Train-Time-Activity

For this project we were asked to build an application for train schedules that will be able to be updated in real-time using a Firebase database.  It also needed the ability to add a new train and its destination, the frequency of the train, the next train time, and how many minutes until the next train would arrive.  That would then have to be added to the database and then updated on our page.

Setting up the HTML and css was done by using bootstrap to layout the title area, table form where the train information is shown from the database, and a form for the admin to add a new train.  This was fairly easy to layout using bootstrap, and the few other colors and layout aspects were added through the css page.  Then the javascript and jQuery file had to configure and initialize the Firebase database, take the added train and information and push it to our database, and then add that information to our page.  Using our past activities from class, information Bryan had given us regarding moment(), and the train time and frequency, it will calculate the minutes until the next train and the next time it would arrive.

The problems I ran into for this exercise was formatting the time layout by using the moment() library.  Looking online did not prove to be much help, because most things I read were using 'mask' or adding some other sort of code to change the layouts.  The other aspect that I found to be difficult was in the form they had asked us to have the user input the train time in military time, but talking with Aaron he had suggested to instead taking the input as "time", input it as a string or "text" and then parsing the time on the back end.  I did try to work that into my page but in the end I kept it as is because the user will input the train time in AM/PM time, it will convert it to 24-hour time in the code, and then I formatted the output in our table back to normal 12-hour AM/PM time.  In the future I will look further into the formatting and different types of input that HTML can provide.  The last aspect I had added that took a little bit of time was adding the current time to the page, but using the moment.js site I was able to format it correctly to the top of the table.