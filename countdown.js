/*
		Your Name: Jeremy Goodwin
		Last Modified Date: 12/13/2021
		File: event_registration.js
		File Description: This js document runs the timer.
*/

window.onload = function () {
            var minute = 9;
            var sec = 59;
            setInterval(function () {
               document.getElementById("timer").innerHTML =
                  minute + " : " + sec;
                if (sec < 10) {
                    document.getElementById("timer").innerHTML =
                  minute + " : " + "0"+sec;
                }
                
                if (minute == 0){
                if (sec <1){
                    alert("Your time has expired! Refresh to start over.")
                    location.reload()
                }
            }
                 sec--;
                
               if (sec < 0) {
                  minute--;
                  sec = 59;
               }
            }, 1000);  
         };