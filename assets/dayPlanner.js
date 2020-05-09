var currentDate = Date(Date.now())//Actual date & time 
var submitBtn = $(".btn");
var currentHour = new Date().getHours();//Current hour in military time

//Added current Date & time 
$("#currentDay").append(currentDate)


//click button to save in local storage & to retrieve/save  on each time slot 
submitBtn.on("click", function() {
  // console.log($(this))

  console.log($(this).val());
  var saveHour = $(this).val();
  localStorage.setItem("hour" + saveHour, $("#text" + saveHour).val().trim());
  
  
});


for (let i = 9; i < 21; i++) {
    var newHourText = localStorage.getItem("hour"+i)
    
    //if the current time is not shown on the page then 
    if(newHourText !== null){
        $("#text"+i).val(newHourText)
    }
    console.log(currentHour)
    //this makes the slot(s) grey if the current time has already passed
    if(currentHour>i){
        $("#text"+i).addClass("past")
    }
    //this makes the slot red if it is the current time
    else if (parseInt(currentHour)=== i){
        $("#text"+i).addClass("present")
    }

    // this makes the slot(s) green if it is ahead of the current time 
    else {
        $("#text"+i).addClass("future")
    }


}