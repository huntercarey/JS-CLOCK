//We need a way to get the current time and have that be updated each second.

//To do this, we are going to create a function that contains a timer to call itself again each second.

function showTime() {
    var date = new Date(); //This gets us the current date and time.

    var hour = date.getHours(); //0-23

    var minute = date.getMinutes(); //0-59

    var seconds = date.getSeconds(); //0-59

    var period = 'AM'; //We're going to assume that we're in AM to start

    //We need to make sure the hour is properly presented in 12 hour time, and we also need to determine whether we should display AM or PM.

    //With our hours being between 0 and 23, 0 would equla 12AM and anything 12 or above is a PM hour.

    if (hour === 0) {
        period = 'AM'
    } else if (hour >= 12) {
        period = 'PM';
    }

    if (hour === 0) {
        hour = 12; //If hour = 0, change the value of hour to 12.
    }

    if (hour > 12) {
        hour -= 12; //If hour is greater than 12, subtract 12 from it - 13 === 1
    }

    hour = hour < 10 ? '0' + hour : hour; //If hour is less than 10, set hour equal to 0 plus the value of hour.
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //String to store the current time
    var time = `${hour}:${minute}:${seconds} ${period}`;

    document.getElementById('clockDisplay').innerText = time;

    setTimeout(showTime, 1000); //Schedule the showtime function to be called after 1000 ms (1 second)
}

showTime();

function showDate() {
    var date =  new Date();

    var dayOfWeek = date.getDay(); //Returns a value between 0 and 6 that corresponds to the current day of the week.

    switch (dayOfWeek) {
        case 0:
            dayOfWeek = 'Sunday';
            break;
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
        default:
            dayOfWeek = 'error';
    }

    var month = date.getMonth();

    switch (month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = 'error';
    }

    var dayOfMonth = date.getDate(); //Returns the current day in the month (1-31)

    var todaysDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;

    document.getElementById('dateDisplay').innerText = todaysDate;

    console.log(todaysDate);

    setTimeout(showDate, 8.64e+7);

}

showDate();