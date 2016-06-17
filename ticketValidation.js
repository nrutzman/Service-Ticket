/**
Author: Nathan Utzman
Date Created: 4.28.2016

Purpose: Creates a form which collects information for 
a support center ticket

Date Modified: 5.12.2016
Modified By: Nathan Utzman
*/

var letters = /^[A-Z a-z \s]+$/;  //regular expression for containing only letters and spaces
var numbers = /^[0-9]+$/;         //regular expression for containing only numbers
var emailCheck = /^[^@]+@[^@]+$/; //regular expression for an email address

function checkFirstName() {
	name = document.getElementById("firstName").value;
	
	if(name.length < 1)
		//writes an error if a name isn't entered
		document.getElementById("firstNameError").innerHTML = "Please enter a first name." + "<br>";
		
	else if(!name.match(letters))
		//writes an error if the name contains non-letters
		document.getElementById("firstNameError").innerHTML = "Please enter a name using only letters." + "<br>";
	
	else
		//deletes error message if valid input
		document.getElementById("firstNameError").innerHTML = "";
}

function checkLastName() {
	name = document.getElementById("lastName").value;
	
	if(name.length < 1)
		//writes an error if a name isn't entered
		document.getElementById("lastNameError").innerHTML = "Please enter a last name." + "<br>";
		
	else if(!name.match(letters))
		//writes an error if the name contains non-letters
		document.getElementById("lastNameError").innerHTML = "Please enter a name using only letters." + "<br>";
		
	else
		//deletes error message if valid input
		document.getElementById("lastNameError").innerHTML = "";
}

function checkEmail() {
	email = document.getElementById("email").value;
	
	if(!email.match(emailCheck))
		//checks for a valid email based on the regular expression
		document.getElementById("emailError").innerHTML = "Invalid email address." + "<br>";
		
	else
		//deletes error message if valid input
		document.getElementById("emailError").innerHTML = "";
		
}

function checkDayPhone() {
	phone = document.getElementById("dayPhone").value;
	
	if(phone.length>0) { //doesn't write error if nothing is entered for this input
		
		if(!phone.match(numbers))
			//writes error if non-numbers are entered
			document.getElementById("dayPhoneError").innerHTML = "Please use only numbers. (no special characters or spaces)" + "<br>";
		
		else if(phone.length!=10)
			//writes error if there aren't ten digits
			document.getElementById("dayPhoneError").innerHTML = "Please enter a ten digit phone number." + "<br>";
		
		else
			//deletes error message if valid input
			document.getElementById("dayPhoneError").innerHTML = "";
	}
	
	else
		//deletes error message if no input
		document.getElementById("dayPhoneError").innerHTML = "";
}

function checkEveningPhone() {
	phone = document.getElementById("eveningPhone").value;
	
	if(phone.length>0) { //doesn't write error if nothing is entered for this input
		
		if(!phone.match(numbers))
			//writes error if non-numbers are entered
			document.getElementById("eveningPhoneError").innerHTML = "Please use only numbers. (no special characters or spaces)" + "<br>";
		
		else if(phone.length!=10)
			//writes error if there aren't ten digits
			document.getElementById("eveningPhoneError").innerHTML = "Please enter a ten digit phone number." + "<br>";
		
		else
			//deletes error message if valid input
			document.getElementById("eveningPhoneError").innerHTML = "";
	}
	else
		//deletes error message if no input
		document.getElementById("eveningPhoneError").innerHTML = "";
}

function formReset() {
	//resets the form to default when the reset button is pressed
    document.getElementById("ticketForm").reset();
	document.getElementById("firstNameError").innerHTML = "";
	document.getElementById("lastNameError").innerHTML = "";
	document.getElementById("emailError").innerHTML = "";
	document.getElementById("dayPhoneError").innerHTML = "";
	document.getElementById("eveningPhoneError").innerHTML = "";
}