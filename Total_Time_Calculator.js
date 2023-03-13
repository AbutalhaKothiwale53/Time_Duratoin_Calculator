function HoursDurationCalculator(){
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;

    // convert time into minutes
   var startHour = parseInt(startTime.substr(0,2));
   var startMinute = parseInt(startTime.substr(3,2));
   var endHour = parseInt(endTime.substr(0,2));
   var endMinute = parseInt(endTime.substr(3,2));

   var startTotalMinutes = startHour * 60 + startMinute;
   var endTotalMinutes = endHour * 60 + endMinute;

   var totalDuration = endTotalMinutes - startTotalMinutes;

   var durationHours = Math.floor(totalDuration / 60);
   var durationMinutes = totalDuration % 60;

    document.getElementById("totalHoursDuration").innerHTML = durationHours + " Hours, " + durationMinutes + " minutes";
    
}
