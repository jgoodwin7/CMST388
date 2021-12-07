var cancelled1 = true;
var cancelled2 = true;

//these are used simple to validate if the functions in the submit function have been completed

$('#onlyalpha').keypress(function(e) {
      var letters=/^[a-z]/gi; //i means ignorecase
      if(!(e.key).match(letters)) e.preventDefault();
    });

 $('#onlyalpha2').keypress(function(e) {
      var letters=/^[a-z]/gi; //i means ignorecase
      if(!(e.key).match(letters)) e.preventDefault();
    });

 $('#onlyalpha3').keypress(function(e) {
      var letters=/^[a-z]/gi; //i means ignorecase
      if(!(e.key).match(letters)) e.preventDefault();
    });

 $('#onlynumbers').keypress(function(e) {
      var letters=/^[0-9]/g; //i means ignorecase
      if(!(e.key).match(letters)) e.preventDefault();
    });

$('#onlynumbers2').keypress(function(e) {
      var letters=/^[0-9]/g; //i means ignorecase
      if(!(e.key).match(letters)) e.preventDefault();
    });
$('#onlynumbers3').keypress(function(e) {
      var letters=/^[0-9]/g; //i means ignorecase
      if(!(e.key).match(letters)) e.preventDefault();
    });

//I am sure there is a more efficient way to do this but this code makes sure that you can only type certain characters on the selected fields.

function confirmEmail() {
        var email = document.getElementById("email").value
        var email2 = document.getElementById("email2").value
        if(email != email2) {
            alert('Email Not Matching!');
            event.preventDefault();
            cancelled1 = true;
            return false;
        }
        else{
        cancelled1 = false;
        }
        }

//this code validates that the emails are the exact same.

function handleData()
{
    var form_data = new 
    FormData(document.querySelector("form"));
    if(form_data.getAll("cont[]").length < 2)
    {
     alert('Please check at least two contact methods!');
     event.preventDefault();
    cancelled2 = true;
    return false;
    }
    else{
        cancelled2 = false;
    }
}

//this code validates that there are at least two checkboxes selected.

function validateForm() {
    confirmEmail()
    handleData()
    submit()
}
    
//this function is what is directed to when the submit button is clicked.

function submit(){
    if (cancelled1 == false && cancelled2 == false){
        alert("submitted")
    }
}

//the final portion of the code where when everything else is validated, the form gets submitted. I chose to leave out the reset() function as HTML allows forms to have a button that automatically clear the fields. This allows for cleaner code.