
function Clock() {

    var hr = document.getElementById("alarmhrs"); 
    var min = document.getElementById("alarmins")
    var alarmBtn = document.getElementById("settingAlarm")
    var resetBtn = document.getElementById("clear");
    var sound  = document.getElementById("alarm-sound")
    

    //Showing The Clock Alarm 
    var showHrs = document.getElementById("showHrs"); 
    var showMin  = document.getElementById("showmin"); 
    var showsec = document.getElementById("showsec"); 

    var date = new Date(); 


    var updateTime = () => {
      var date = new Date();

        showHrs.textContent = date.getHours(); 
        showMin.textContent = date.getMinutes(); 
        showsec.textContent = date.getSeconds();
      

        const hitSound = () => sound.play(); 

        if(hr.value == date.getHours() && min.value == date.getMinutes()){
          hitSound(); 

        }else {

          return console.log("Nothing!")
        }

    }


    setInterval(updateTime, 1000);

    var setAlarm = () => {
      console.log("Setting The Alarm!")
      setInterval(updateTime, 1000);


    }

    //reset the alarm 

    var resetAlarm = async () => {
      console.log("Resetting The Alarm"); 

      //stop the Alarm Immediately clicked by The user
      //Should we also Join The Runtime, so we can stop the sound playing;

      date.getHours().disabled = false; 
      date.getMinutes().disabled = false; 
      //Stop Here 
      

      console.log(hrRefresh, secRefresh)
      
      //if 
    }

    //State For The Application 
    var state = () => {
        alarmBtn.addEventListener("click", () => { 
           setAlarm(); 
        });

        resetBtn.addEventListener("click", () => {
          resetAlarm(); 
          
        });

    }
    state(); 
}


window.addEventListener("load", (e) => {
  Clock(); 
  e.preventDefault(); 
})

