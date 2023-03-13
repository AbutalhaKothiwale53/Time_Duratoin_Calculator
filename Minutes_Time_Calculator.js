function hoursIntoMinutes(){
    var days  = parseInt(document.getElementById("days").value || 0);
    var hours = parseInt(document.getElementById("hours").value || 0);
    var minutes = parseInt(document.getElementById("minutes").value || 0);
    var errors = document.getElementById("errorMessage");

    // calculate days into minutes
    var totalDays = (days * 24 * 60);
    var totalHour = (hours * 60)
    var totalMinutes = Math.floor(totalDays + totalHour + minutes);
    
    // display output
    // document.getElementById('totalDays').innerHTML = totalDays;
    // document.getElementById('totalHours').innerHTML = totalHour;
    document.getElementById('totalMinutes').innerHTML = totalMinutes
;

}
