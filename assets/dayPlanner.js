var currentDate = Date(Date.now())//Actual date & time 
var submitBtn = $(".btn");
var currentHour = new Date().getHours();//Current hour in military time


$("#currentDay").append(currentDate)

 
submitBtn.on("click", function() {
  // console.log($(this))

  console.log($(this).val());
  var saveHour = $(this).val();
  localStorage.setItem("hour" + saveHour, $("#text" + saveHour).val().trim());
  
  
});


for (let i = 9; i < 21; i++) {
    var newHourText = localStorage.getItem("hour"+i)
     
    if(newHourText !== null){
        $("#text"+i).val(newHourText)
    }
    console.log(currentHour)
    if(currentHour>i){
        $("#text"+i).addClass("past")
    }
    else if (parseInt(currentHour)=== i){
        $("#text"+i).addClass("present")
    }

  
    else {
        $("#text"+i).addClass("future")
    }


}
