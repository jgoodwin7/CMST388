/*
		Your Name: Jeremy Goodwin
		Last Modified Date: 12/13/2021
		File: event_registration.js
		File Description: The javascript written for the main event registration page.
*/

// Set the minimum and maximum number of tickets able to be purchased


var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;


function calculateTotal() {
    var tix = document.getElementById("numTickets").value
    if (isNaN(tix)){
       document.getElementById("msgTickets").innerHTML = "Number must be 1-3!";
        document.getElementById("numTickets").style.backgroundColor = "#FFCEC7";
        document.getElementById("contactInformation").style.display = "none"
        document.getElementById("totalCost").value = "$0.00";
        return false;
        //if the ticket number is anything but 1-3, this shows an error message to the user
   }
    else{
        if (tix >= 1 && tix <= 3){
            var price = tix * costPerTicket + ticketSurcharge;
            var finalprice = "$" + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
            document.getElementById("msgTickets").innerHTML = "";
       document.getElementById("numTickets").style.backgroundColor = "#efefef";
            document.getElementById("contactInformation").style.display = "block"
            document.getElementById("totalCost").value = finalprice;
            return true 
            //if the user enters 1-3 tickets, this code validates it and then gives the user a calculated total. Also shows the next two fields and the submit button.
        }
        else{}
        document.getElementById("msgTickets").innerHTML = "Number must be 1-3!";
        document.getElementById("numTickets").style.backgroundColor = "#FFCEC7";
        document.getElementById("contactInformation").style.display = "none"
        document.getElementById("totalCost").value = "$0.00";
        return false;
        //a catch all for any other mistakes a user could throw at this field
        }  
}

function completePurchase() {
     var em = document.getElementById("email").value
     var nm = document.getElementById("name").value
     var pr = document.getElementById("totalCost").value
    if (nm == ""){
        document.getElementById("msgname").innerHTML = "You must enter a valid name!";
        document.getElementById("name").style.backgroundColor = "#FFCEC7";
        return false;
   }
    else{
        document.getElementById("msgname").innerHTML = "";
        document.getElementById("name").style.backgroundColor = "#efefef";
        }
    //this code looks to see if text has been written in and will continue if it has been.
    if (em == ""){
        document.getElementById("msgemail").innerHTML = "You must enter a valid email!";
        document.getElementById("email").style.backgroundColor = "#FFCEC7";
        return false;
   }
    else{
        document.getElementById("msgemail").innerHTML = "";
        document.getElementById("email").style.backgroundColor = "#efefef";
        }
     //this code looks to see if text has been written and will continue if it has been.
    alert("Thank you for your purchase! Your purchase total: "+pr)
    location.reload()
    //this code alerts the user of the completion of their purchase and gives them their total.
}
