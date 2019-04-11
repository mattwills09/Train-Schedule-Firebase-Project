var config = {
    apiKey: "AIzaSyC5SXjS_0kWn3V5DAtvG5ETg4P2Gzp6kU8",
    authDomain: "train-time-activity-531df.firebaseapp.com",
    databaseURL: "https://train-time-activity-531df.firebaseio.com",
    projectId: "train-time-activity-531df",
    storageBucket: "train-time-activity-531df.appspot.com",
    messagingSenderId: "863207747808"
  };

  firebase.initializeApp(config);

var database = firebase.database();

// ---------------------------------------------------

$(document).ready(function() {

    var currently = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    $(".currently").append("<<  " + currently + "  >>");

    database.ref().on("child_added", function(snapshot) {
        var trainName = snapshot.val().trainName;
        var destination = snapshot.val().destination;
        var frequency = snapshot.val().frequency;
        var firstTime = snapshot.val().firstTime;
        var nextTrain = snapshot.val().nextTrain;
        var minutesTillTrain = snapshot.val().minutesTillTrain;

        console.log(snapshot.val().trainName);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().frequency);
        console.log(snapshot.val().firstTime);
        console.log(snapshot.val().minutesTillTrain);
        // console.log(moment(firstTime).format("HH:mm"));

    // ---------------------------------------------------

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("HH:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("Difference In Trains: " + diffTime);

    var timeRemainder = diffTime % frequency;
    console.log("Train Time Apart: " + timeRemainder);

    var minutesTillTrain = frequency - timeRemainder;
    console.log("Minutes Till Next Train: " + minutesTillTrain);

    var nextTrain = moment().add(minutesTillTrain, "minutes").format("hh:mm a");
    console.log("Next Train Arrival Time: " + nextTrain);


        addTrain(trainName, destination, frequency, nextTrain, minutesTillTrain);
    })

    // ---------------------------------------------------

    $("#submit").on("click",function(event) {
        event.preventDefault();

        var trainName = $("#trainName").val();
        var destination = $("#destination").val();
        var firstTime = $("#firstTime").val();
        var frequency = $("#frequency").val();

        // firstTime.moment().format("hh:mm");

        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTime: firstTime,
            frequency: frequency,
        });

        alert("New Train Added Successfully!  Good Job Conductor.");

        $("#trainName").val("");
        $("#destination").val("");
        $("#firstTime").val("");
        $("#frequency").val("");

    });

    // ---------------------------------------------------

    function addTrain(trainName, destination, frequency, nextTrain, minutesTillTrain) {

        var row = $("<tr>");
            row.append(addData(trainName)).append(addData(destination)).append(addData(frequency)).append(addData(nextTrain)).append(addData(minutesTillTrain));

        function addData(data){
            var td = $("<td>");
            td.text(data);
        return td;
        }

        $("#trains").append(row);
    }
});